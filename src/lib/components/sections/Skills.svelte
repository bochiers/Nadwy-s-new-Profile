<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { certifications, skills } from '$lib/data';
</script>

<!-- Skills + certifications — bar/credits styled -->
<section id="skills" class="scroll-mt-24 border-y border-white/10 bg-ink-2/60 px-5 py-24 md:px-8 md:py-32">
  <div class="mx-auto max-w-6xl">
    <div class="grid gap-16 md:grid-cols-2 md:gap-20">
      <div>
        <p class="mb-6 text-xs uppercase tracking-[0.5em] text-blood-soft" data-reveal use:reveal>
          Arsenal
        </p>
        <h2 class="display-lg text-bone" data-reveal use:reveal>
          Skills &<br />tools
        </h2>

        <div class="mt-10 space-y-7">
          {#each skills as s}
            <div data-reveal use:reveal>
              <div class="flex items-baseline justify-between">
                <span class="text-sm uppercase tracking-[0.2em] text-bone">{s.label}</span>
                <span class="font-display text-lg text-ash">{s.value}%</span>
              </div>
              <div class="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-blood to-blood-soft"
                  style="width:{s.value}%"
                ></div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div>
        <p class="mb-6 text-xs uppercase tracking-[0.5em] text-blood-soft" data-reveal use:reveal>
          Credentials
        </p>
        <h2 class="display-lg text-bone" data-reveal use:reveal>
          Certi-<br />fications
        </h2>

        <ul class="mt-10 divide-y divide-white/10 border-y border-white/10">
          {#each certifications as c}
            <li
              class="group flex items-center justify-between gap-6 py-6 transition hover:px-2"
              data-reveal use:reveal
            >
              <div>
                <span class="font-display text-2xl tracking-wide text-bone md:text-3xl">{c.code}</span>
                <p class="mt-1 text-sm text-ash">{c.name}</p>
              </div>
              <span class="text-blood-soft opacity-0 transition group-hover:opacity-100">✦</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>
