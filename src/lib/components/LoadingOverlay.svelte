<script lang="ts">
  import { onMount } from 'svelte';
  import { profile } from '$lib/data';

  let progress = 0;
  let done = false;

  onMount(() => {
    let raf = 0;
    let value = 0;

    const tick = () => {
      // ease towards 100 with a slightly irregular, "boot up" cadence
      const step = value < 70 ? 1.6 + Math.random() * 2.2 : 0.9 + Math.random() * 1.4;
      value = Math.min(100, value + step);
      progress = value;

      if (value >= 100) {
        window.setTimeout(() => (done = true), 320);
        return;
      }
      raf = window.setTimeout(tick, 40 + Math.random() * 60);
    };

    tick();
    return () => window.clearTimeout(raf);
  });
</script>

<div
  class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-opacity duration-700"
  class:pointer-events-none={done}
  class:opacity-0={done}
  aria-hidden={done}
>
  <div class="flex items-center gap-3">
    <span class="font-display text-3xl tracking-tight text-bone md:text-5xl">Loading</span>
    <span class="inline-flex gap-1.5">
      <span class="h-2 w-2 rounded-full bg-blood-soft" style="animation: pulseDot 1.1s infinite"></span>
      <span
        class="h-2 w-2 rounded-full bg-blood-soft"
        style="animation: pulseDot 1.1s infinite 0.18s"
      ></span>
      <span
        class="h-2 w-2 rounded-full bg-blood-soft"
        style="animation: pulseDot 1.1s infinite 0.36s"
      ></span>
    </span>
  </div>

  <div class="mt-8 h-px w-64 overflow-hidden bg-white/15 md:w-96">
    <div
      class="h-full bg-blood-soft transition-[width] duration-200 ease-out"
      style={`width:${progress}%`}
    ></div>
  </div>

  <span class="mt-4 text-[11px] uppercase tracking-[0.4em] text-ash/70">
    {profile.name}
  </span>
</div>
