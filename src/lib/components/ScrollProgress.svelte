<script lang="ts">
  import { onMount } from 'svelte';

  let pct = 0;

  onMount(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<!-- Top scroll-progress: a thin blood-red "compile" bar -->
<div class="fixed inset-x-0 top-0 z-[70] h-[3px] bg-transparent" aria-hidden="true">
  <div
    class="h-full origin-left bg-gradient-to-r from-blood to-blood-soft shadow-[0_0_12px_rgba(179,35,42,0.7)]"
    style={`transform:scaleX(${pct / 100});transition:transform .12s linear`}
  ></div>
</div>
