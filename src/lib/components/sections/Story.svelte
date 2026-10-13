<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { profile } from '$lib/data';
</script>

<!-- About — reworked as a "prologue" with details like the Goonies story block -->
<section id="story" class="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
  <div class="mx-auto max-w-6xl">
    <p class="mb-10 text-xs uppercase tracking-[0.5em] text-blood-soft" data-reveal use:reveal>
      Prologue
    </p>

    <div class="grid gap-12 md:grid-cols-[1.4fr_1fr]">
      <div>
        <h2 class="display-lg text-bone" data-reveal use:reveal>
          The story of<br /><span class="text-outline">{profile.firstName}</span>
        </h2>

        <p class="mt-8 max-w-2xl text-lg leading-8 text-bone/90" data-reveal use:reveal>
          {profile.aboutIntro}
        </p>
        <p class="mt-6 max-w-2xl text-sm leading-7 text-ash" data-reveal use:reveal>
          {profile.aboutBody}
        </p>

        <div class="mt-10 flex flex-wrap gap-3" data-reveal use:reveal>
          <a
            href="#chapters"
            class="inline-flex items-center justify-center rounded-full bg-blood-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-blood-soft"
            >View more</a
          >
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-bone transition hover:border-blood-soft hover:text-white"
            >Contact</a
          >
        </div>
      </div>

      <div class="grid content-start gap-6" data-reveal="right" use:reveal>
        <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 class="font-display text-sm tracking-wide text-bone/80">Details</h3>
          <dl class="mt-5 space-y-4 text-sm">
            {#each profile.detailsLeft as d}
              <div class="flex items-baseline justify-between gap-4 border-b border-white/5 pb-2">
                <dt class="text-ash">{d.label}</dt>
                <dd class="text-right text-bone">{d.value}</dd>
              </div>
            {/each}
            {#each profile.detailsRight as d}
              <div class="flex items-baseline justify-between gap-4 border-b border-white/5 pb-2">
                <dt class="text-ash">{d.label}</dt>
                <dd class="text-right text-bone">{d.value}</dd>
              </div>
            {/each}
          </dl>
        </div>

        <div class="overflow-hidden rounded-2xl border border-white/10" data-reveal="scale" use:reveal>
          <img
            src="/assets/img/nadwy%20profile.jpg"
            alt={profile.name}
            class="aspect-4/5 w-full object-cover grayscale transition duration-700 hover:grayscale-0"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </div>
</section>
