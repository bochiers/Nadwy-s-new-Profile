<script lang="ts">
  export let items: { href: string; label: string }[] = [];
  export let active = '';

  let open = false;

  function select() {
    open = false;
  }
</script>

<!-- Top-left pulse indicator, like the Goonies nav marker -->
<header class="fixed inset-x-0 top-0 z-50">
  <div class="flex items-center justify-between px-5 py-5 md:px-8">
    <a href="/" class="group flex items-center gap-2.5" aria-label="Home">
      <span class="relative flex h-2.5 w-2.5">
        <span
          class="absolute inline-flex h-full w-full rounded-full bg-blood-soft opacity-60"
          style="animation: pulseDot 1.6s infinite"
        ></span>
        <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-blood-soft"></span>
      </span>
      <span class="font-display text-sm tracking-wide text-bone/90 group-hover:text-bone">
        NADWY
      </span>
    </a>

    <button
      type="button"
      class="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-bone/80 hover:text-bone md:hidden"
      aria-expanded={open}
      aria-label="Toggle menu"
      onclick={() => (open = !open)}
    >
      {open ? 'Close' : 'Menu'}
    </button>

    <nav class="hidden items-center gap-8 md:flex" aria-label="Primary">
      {#each items as item}
        <a
          href={item.href}
          class="text-xs uppercase tracking-[0.28em] transition-colors"
          class:text-bone={active === item.href}
          class:text-ash={active !== item.href}
          class:hover:text-bone={true}
          onclick={select}
        >
          {item.label}
        </a>
      {/each}
    </nav>
  </div>

  {#if open}
    <div class="border-t border-white/10 bg-ink/95 backdrop-blur md:hidden">
      <nav class="flex flex-col px-5 py-3">
        {#each items as item}
          <a
            href={item.href}
            class="border-b border-white/5 py-3 text-sm uppercase tracking-[0.28em] text-bone/85 hover:text-bone"
            onclick={select}
          >
            {item.label}
          </a>
        {/each}
      </nav>
    </div>
  {/if}
</header>
