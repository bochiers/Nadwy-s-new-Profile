<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { filters, portfolio } from '$lib/data';

  let active: 'all' | 'app' | 'card' | 'web' = 'all';
  $: shown = active === 'all' ? portfolio : portfolio.filter((p) => p.filter === active);
</script>

<!-- Chapters = portfolio projects, presented like Goonies character stories -->
<section id="chapters" class="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
  <div class="mx-auto max-w-6xl">
    <div class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="mb-6 text-xs uppercase tracking-[0.5em] text-blood-soft" data-reveal use:reveal>
          Chapters
        </p>
        <h2 class="display-lg text-bone" data-reveal use:reveal>
          Meet the<br /><span class="text-outline">projects</span>
        </h2>
      </div>

      <div class="flex flex-wrap gap-2" data-reveal use:reveal>
        {#each filters as f}
          <button
            type="button"
            class="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition {active ===
            f.key
              ? 'border-blood-soft bg-blood-2 text-white'
              : 'border-white/15 text-ash hover:border-white/40'}"
            onclick={() => (active = f.key)}
          >
            {f.label}
          </button>
        {/each}
      </div>
    </div>

    <div class="mt-16 flex flex-col gap-24 md:gap-32">
      {#each shown as item, i (item.slug)}
        <article
          class="grid items-center gap-8 md:grid-cols-2 md:gap-14 {i % 2 === 1
            ? 'md:[&>*:first-child]:order-2'
            : ''}"
        >
          <!-- portrait -->
          <a
            href={`/portfolio/${item.slug}`}
            class="group relative block overflow-hidden rounded-3xl border border-white/10"
            data-reveal={i % 2 === 1 ? 'right' : 'left'}
            use:reveal
          >
            <div class="aspect-4/5 w-full overflow-hidden bg-white/5 md:aspect-4/3">
              <img
                src={item.image}
                alt={item.name}
                class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                loading="lazy"
              />
            </div>
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"
            ></div>
            <div class="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <span class="font-display text-xl tracking-wide text-bone md:text-2xl">
                {item.role}
              </span>
              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-bone transition group-hover:border-blood-soft group-hover:bg-blood-2 group-hover:text-white"
              >
                <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M7 17 17 7m0 0H8m9 0v9" stroke="currentColor" stroke-width="2" fill="none" />
                </svg>
              </span>
            </div>
          </a>

          <!-- story -->
          <div>
            <p class="text-xs uppercase tracking-[0.4em] text-blood-soft">{item.categoryLabel}</p>
            <h3 class="display-md mt-4 text-bone" data-reveal use:reveal>{item.name}</h3>
            <p class="mt-4 text-sm uppercase tracking-[0.2em] text-ash">{item.subtitle}</p>

            <div class="mt-6 space-y-4 text-sm leading-7 text-bone/80" data-reveal use:reveal>
              {#each item.story as para}
                <p>{para}</p>
              {/each}
            </div>

            <a
              href={`/portfolio/${item.slug}`}
              class="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-bone transition hover:text-blood-soft"
              data-reveal use:reveal
            >
              More info
              <span class="h-px w-8 bg-blood-soft"></span>
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
