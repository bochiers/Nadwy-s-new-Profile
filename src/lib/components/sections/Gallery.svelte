<script lang="ts">
  import { onMount } from 'svelte';
  import { reveal } from '$lib/actions/reveal';
  import { galleryItems } from '$lib/data';

  let index = $state<number | null>(null);
  let open = $derived(index !== null);

  // varied spans give the grid a masonry feel
  const spans = [
    'md:col-span-2 md:row-span-2',
    '',
    '',
    'md:col-span-2',
    '',
    'md:row-span-2',
    '',
    'md:col-span-2 md:row-span-2',
    '',
    '',
    'md:col-span-2',
    ''
  ];

  function show(i: number) {
    index = i;
  }
  function close() {
    index = null;
  }
  function next() {
    index = index === null ? null : (index + 1) % galleryItems.length;
  }
  function prev() {
    index = index === null ? null : (index - 1 + galleryItems.length) % galleryItems.length;
  }

  function onKey(e: KeyboardEvent) {
    if (!open) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') next();
    else if (e.key === 'ArrowLeft') prev();
  }

  onMount(() => {
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // lock scroll while the lightbox is open
  $effect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  });
</script>

<!-- Gallery grid with masonry layout + lightbox -->
<section id="gallery" class="scroll-mt-24 border-t border-white/10 px-5 py-24 md:px-8 md:py-32">
  <div class="mx-auto max-w-6xl">
    <div class="flex flex-wrap items-end justify-between gap-6">
      <div>
        <p class="mb-6 text-xs uppercase tracking-[0.5em] text-blood-soft" data-reveal use:reveal>
          Archive
        </p>
        <h2 class="display-lg text-bone" data-reveal use:reveal>
          Field<br /><span class="text-outline">notes</span>
        </h2>
      </div>
      <p class="max-w-sm text-sm leading-6 text-ash" data-reveal use:reveal>
        Moments from deployments, tests and training — the work behind the work.
      </p>
    </div>

    <div
      class="mt-14 grid auto-rows-[9rem] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[11rem] md:grid-cols-4 md:gap-4"
    >
      {#each galleryItems as item, i}
        <button
          type="button"
          class="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left {spans[
            i % spans.length
          ]}"
          data-reveal="scale"
          use:reveal
          style={`transition-delay:${(i % 4) * 60}ms`}
          onclick={() => show(i)}
          aria-label={`Open image: ${item.caption}`}
        >
          <img
            src={item.src}
            alt={item.caption}
            class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          <!-- hover veil + caption -->
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
          ></div>
          <div
            class="pointer-events-none absolute inset-x-3 bottom-3 flex items-center gap-2 opacity-0 transition duration-500 group-hover:opacity-100"
          >
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/40 text-bone">
              <svg viewBox="0 0 24 24" class="h-3 w-3 fill-current" aria-hidden="true">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" stroke-width="2" fill="none" />
              </svg>
            </span>
            <span class="line-clamp-1 text-xs text-bone/90">{item.caption}</span>
          </div>
          <span
            class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-blood-soft/0 transition duration-500 group-hover:ring-blood-soft/60"
          ></span>
        </button>
      {/each}
    </div>

    <a
      href="#chapters"
      class="mt-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ash transition hover:text-blood-soft"
      data-reveal use:reveal
    >
      View chapters
      <span class="h-px w-8 bg-blood-soft"></span>
    </a>
  </div>
</section>

{#if index !== null}
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
    class="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm md:p-10"
    role="dialog"
    aria-modal="true"
    aria-label="Image viewer"
    tabindex="-1"
    onclick={close}
    onkeydown={onKey}
  >
    <div
      class="relative flex max-h-full w-full max-w-5xl flex-col"
      role="presentation"
      onclick={(e) => e.stopPropagation()}
    >
      <img
        src={galleryItems[index].src}
        alt={galleryItems[index].caption}
        class="max-h-[78vh] w-full rounded-2xl object-contain"
      />

      <div class="mt-4 flex items-center justify-between gap-4">
        <p class="text-sm text-bone/85">
          <span class="mr-2 font-display text-blood-soft">{(index ?? 0) + 1}</span>
          {galleryItems[index].caption}
        </p>
        <span class="text-xs uppercase tracking-[0.3em] text-ash">
          {index + 1} / {galleryItems.length}
        </span>
      </div>

      <!-- controls -->
      <button
        type="button"
        class="absolute -left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink/70 text-bone transition hover:border-blood-soft hover:bg-blood-2 md:-left-16"
        aria-label="Previous image"
        onclick={(e) => {
          e.stopPropagation();
          prev();
        }}
      >
        <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" fill="none" /></svg>
      </button>
      <button
        type="button"
        class="absolute -right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink/70 text-bone transition hover:border-blood-soft hover:bg-blood-2 md:-right-16"
        aria-label="Next image"
        onclick={(e) => {
          e.stopPropagation();
          next();
        }}
      >
        <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" /></svg>
      </button>
      <button
        type="button"
        class="absolute -top-12 right-0 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ash transition hover:text-bone"
        aria-label="Close"
        onclick={(e) => {
          e.stopPropagation();
          close();
        }}
      >
        Close
        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" fill="none" /></svg>
      </button>
    </div>
  </div>
{/if}
