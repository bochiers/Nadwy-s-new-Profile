<script lang="ts">
  import { onMount } from 'svelte';

  let x = $state(-100);
  let y = $state(-100);
  let hovering = $state(false);
  let enabled = $state(false);
  let pressed = $state(false);

  onMount(() => {
    // only enable on devices with a fine pointer (desktop)
    if (!matchMedia('(pointer: fine)').matches) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    enabled = true;
    document.body.classList.add('custom-cursor-active');

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target as HTMLElement | null;
      hovering = !!t?.closest('a, button, input, textarea, [data-cursor="hover"]');
    };
    const down = () => (pressed = true);
    const up = () => (pressed = false);
    const leave = () => ((x = -100), (y = -100));

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointerleave', leave);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointerleave', leave);
    };
  });
</script>

{#if enabled}
  <!-- soft glow that trails the pointer -->
  <div
    class="pointer-events-none fixed z-[65] h-40 w-40 rounded-full opacity-60 blur-3xl transition-opacity duration-300"
    style={`left:${x}px;top:${y}px;transform:translate(-50%,-50%) scale(${hovering ? 1.4 : 1});background:radial-gradient(circle, rgba(143,20,24,.35), transparent 65%)`}
    aria-hidden="true"
  ></div>

  <!-- reticle dot -->
  <div
    class="pointer-events-none fixed z-[80] rounded-full border transition-[width,height,opacity] duration-200 {hovering
      ? 'border-blood-soft'
      : 'border-bone/60'}"
    style={`left:${x}px;top:${y}px;width:${hovering ? 44 : 22}px;height:${hovering ? 44 : 22}px;transform:translate(-50%,-50%) scale(${pressed ? 0.85 : 1});background:${hovering ? 'rgba(179,35,42,0.08)' : 'transparent'}`}
    aria-hidden="true"
  >
    <span
      class="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bone"
    ></span>
  </div>
{/if}
