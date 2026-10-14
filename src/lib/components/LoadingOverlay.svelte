<script lang="ts">
  import { onMount } from 'svelte';
  import { profile } from '$lib/data';

  let progress = $state(0);
  let done = $state(false);
  let lines = $state<{ text: string; status: string }[]>([]);

  const bootSequence = [
    { text: 'init kernel modules', status: 'ok' },
    { text: 'mount /dev/infra', status: 'ok' },
    { text: 'link network interfaces', status: 'ok' },
    { text: 'handshake secure channel', status: 'ok' },
    { text: 'load project manifests', status: 'ok' },
    { text: 'start delivery pipeline', status: 'ready' }
  ];

  onMount(() => {
    let raf = 0;
    let value = 0;
    let li = 0;

    const pushLine = () => {
      if (li < bootSequence.length) {
        lines = [...lines, bootSequence[li]];
        li++;
        raf = window.setTimeout(pushLine, 180 + Math.random() * 220);
      }
    };
    pushLine();

    const tick = () => {
      const step = value < 70 ? 1.6 + Math.random() * 2.2 : 0.9 + Math.random() * 1.4;
      value = Math.min(100, value + step);
      progress = value;

      if (value >= 100) {
        window.setTimeout(() => (done = true), 420);
        return;
      }
      raf = window.setTimeout(tick, 40 + Math.random() * 60);
    };
    tick();

    return () => window.clearTimeout(raf);
  });
</script>

<div
  class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink px-6 transition-opacity duration-700"
  class:pointer-events-none={done}
  class:opacity-0={done}
  aria-hidden={done}
>
  <!-- faint grid backdrop -->
  <div class="pointer-events-none absolute inset-0 bg-grid opacity-[0.35]"></div>
  <div
    class="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
    style="background: radial-gradient(circle, rgba(108,14,17,.5), transparent 62%)"
  ></div>

  <div class="relative w-full max-w-lg font-mono">
    <!-- header line -->
    <div class="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-ash/70">
      <span>nadwy@nawasena</span>
      <span>:~$ ./boot</span>
    </div>

    <!-- boot log -->
    <ul class="min-h-[9rem] space-y-1.5 text-[12px] leading-5 text-bone/80">
      {#each lines as line}
        <li class="flex items-center gap-2">
          <span class="text-blood-soft">›</span>
          <span class="flex-1">{line.text}</span>
          <span
            class="text-[10px] uppercase tracking-widest {line.status === 'ready'
              ? 'text-blood-soft'
              : 'text-ash/60'}"
          >
            [{line.status}]
          </span>
        </li>
      {/each}
      <li class="flex items-center gap-1 text-blood-soft">
        <span class="inline-block h-3.5 w-1.5 animate-pulse bg-blood-soft"></span>
      </li>
    </ul>

    <!-- progress -->
    <div class="mt-6 flex items-center gap-4">
      <div class="h-[3px] flex-1 overflow-hidden rounded-full bg-white/10">
        <div
          class="h-full rounded-full bg-gradient-to-r from-blood to-blood-soft shadow-[0_0_10px_rgba(179,35,42,0.6)] transition-[width] duration-200 ease-out"
          style={`width:${progress}%`}
        ></div>
      </div>
      <span class="w-12 text-right font-mono text-xs tabular-nums text-bone/90">
        {Math.round(progress)}%
      </span>
    </div>

    <p class="mt-5 text-[10px] uppercase tracking-[0.4em] text-ash/60">
      {profile.name} — {profile.role}
    </p>
  </div>
</div>

<style>
  .font-mono {
    font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
  }
</style>
