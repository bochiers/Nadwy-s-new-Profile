<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  export let data: {
    item: import('$lib/data').Chapter;
  };

  const { item } = data;
  const images = (item.images?.length ? item.images : [item.image]).filter(Boolean);

  let index = 0;

  function go(next: number) {
    const clamped = Math.max(0, Math.min(images.length - 1, next));
    if (clamped !== index) index = clamped;
  }
</script>

<svelte:head>
  <title>{item.name} — Chapters</title>
  <meta name="description" content={item.subtitle} />
</svelte:head>

<main class="px-5 pb-24 pt-32 md:px-8">
  <div class="mx-auto max-w-6xl">
    <a
      href="/#chapters"
      class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ash transition hover:text-blood-soft"
    >
      <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M15.5 5.5 9 12l6.5 6.5-1.4 1.4L6.2 12l7.9-7.9 1.4 1.4Z" />
      </svg>
      Back to chapters
    </a>

    <p class="mt-10 text-xs uppercase tracking-[0.5em] text-blood-soft" data-reveal use:reveal>
      {item.categoryLabel}
    </p>
    <h1 class="display-lg mt-5 text-bone" data-reveal use:reveal>{item.name}</h1>
    <p class="mt-4 text-sm uppercase tracking-[0.2em] text-ash" data-reveal use:reveal>
      {item.subtitle}
    </p>

    <div class="mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
      <section data-reveal use:reveal>
        <div class="relative overflow-hidden rounded-3xl border border-white/10">
          <div class="relative aspect-16/10 w-full">
            <div
              class="absolute inset-0 flex transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={`transform: translate3d(${-index * 100}%, 0, 0);`}
            >
              {#each images as src}
                <div class="h-full w-full shrink-0">
                  <img src={src} alt={item.name} class="h-full w-full object-cover" loading="lazy" />
                </div>
              {/each}
            </div>

            {#if images.length > 1}
              <div class="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                <button
                  type="button"
                  class="rounded-full border border-white/20 bg-ink/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-bone backdrop-blur transition hover:border-blood-soft disabled:opacity-40"
                  onclick={() => go(index - 1)}
                  disabled={index === 0}
                  aria-label="Previous image"
                >
                  Prev
                </button>
                <div
                  class="rounded-full border border-white/15 bg-ink/50 px-4 py-1.5 text-xs tabular-nums text-bone backdrop-blur"
                >
                  {index + 1} / {images.length}
                </div>
                <button
                  type="button"
                  class="rounded-full border border-white/20 bg-ink/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-bone backdrop-blur transition hover:border-blood-soft disabled:opacity-40"
                  onclick={() => go(index + 1)}
                  disabled={index === images.length - 1}
                  aria-label="Next image"
                >
                  Next
                </button>
              </div>
            {/if}
          </div>
        </div>

        {#if images.length > 1}
          <div class="mt-5 flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {#each images as src, i}
              <button
                type="button"
                class="shrink-0 overflow-hidden rounded-xl border transition {i === index
                  ? 'border-blood-soft'
                  : 'border-white/10'}"
                onclick={() => go(i)}
                aria-label={`View image ${i + 1}`}
              >
                <img src={src} alt="" class="h-20 w-28 object-cover" loading="lazy" />
              </button>
            {/each}
          </div>
        {/if}

        <div class="mt-10 space-y-4 text-base leading-8 text-bone/85">
          {#each item.story as para}
            <p>{para}</p>
          {/each}
        </div>
      </section>

      <aside class="h-max rounded-3xl border border-white/10 bg-white/[0.03] p-6" data-reveal="right" use:reveal>
        <h2 class="font-display text-sm tracking-wide text-bone/80">Project information</h2>
        <dl class="mt-5 space-y-4 text-sm">
          <div class="flex items-baseline justify-between gap-4 border-b border-white/5 pb-2">
            <dt class="text-ash">Category</dt>
            <dd class="text-bone">{item.categoryLabel}</dd>
          </div>
          <div class="flex items-baseline justify-between gap-4 border-b border-white/5 pb-2">
            <dt class="text-ash">Client / Program</dt>
            <dd class="text-right text-bone">{item.subtitle}</dd>
          </div>
          <div class="flex items-baseline justify-between gap-4">
            <dt class="text-ash">Images</dt>
            <dd class="text-bone">{images.length}</dd>
          </div>
        </dl>

        <a
          href="/#contact"
          class="mt-8 inline-flex w-full items-center justify-center rounded-full bg-blood-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-blood-soft"
        >
          Get in touch
        </a>
      </aside>
    </div>
  </div>
</main>
