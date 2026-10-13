<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { gallery } from '$lib/data';
</script>

<!-- Gallery grid, mirroring the Goonies gallery -->
<section id="gallery" class="scroll-mt-24 border-t border-white/10 px-5 py-24 md:px-8 md:py-32">
  <div class="mx-auto max-w-6xl">
    <div class="flex flex-wrap items-end justify-between gap-6">
      <div>
        <p class="mb-6 text-xs uppercase tracking-[0.5em] text-blood-soft" data-reveal use:reveal>
          Archive
        </p>
        <h2 class="display-lg text-bone" data-reveal use:reveal>Gallery</h2>
      </div>
      <a
        href="#chapters"
        class="text-xs uppercase tracking-[0.3em] text-ash transition hover:text-blood-soft"
        data-reveal use:reveal
      >
        View chapters →
      </a>
    </div>

    <div class="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {#each gallery as src, i}
        <div
          class="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
          data-reveal="scale"
          use:reveal
          style={`transition-delay:${(i % 4) * 60}ms`}
        >
          <div class="aspect-4/5 w-full overflow-hidden">
            <img
              src={src}
              alt="Gallery image {i + 1}"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div
            class="pointer-events-none absolute inset-0 bg-blood/0 transition duration-500 group-hover:bg-blood/25"
          ></div>
        </div>
      {/each}
    </div>
  </div>
</section>
