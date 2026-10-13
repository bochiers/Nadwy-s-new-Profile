<script lang="ts">
  export let href: string;
  export let label: string;
</script>

<a
  class="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/15 text-bone transition will-change-transform hover:-translate-y-0.5 hover:border-blood-soft hover:text-white focus:outline-none focus:ring-2 focus:ring-blood-soft/60 motion-reduce:transform-none"
  {href}
  target="_blank"
  rel="noreferrer"
  aria-label={label}
  title={label}
>
  <span
    class="pointer-events-none absolute inset-0 -z-10 translate-y-full bg-blood-2 transition-transform duration-300 group-hover:translate-y-0 motion-reduce:transition-none"
  ></span>
  <slot />
</a>
