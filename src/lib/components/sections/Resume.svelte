<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { stats } from '$lib/data';
</script>

<!-- The "Goonies Never Say Die" credits block: giant type + big-number stats -->
<section id="resume" class="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
  <div class="mx-auto max-w-6xl">
    <div class="text-center" data-reveal use:reveal>
      <h2 class="display-xl leading-[0.85] text-bone">
        Always<br /><span class="text-outline">Keep Building</span>
      </h2>
    </div>

    <!-- marquee ribbon -->
    <div class="mt-16 overflow-hidden border-y border-white/10 py-4" data-reveal use:reveal>
      <div class="flex w-max animate-marquee whitespace-nowrap">
        {#each Array(2) as _}
          <span class="flex items-center">
            {#each ['Networking', 'Server Engineer', 'Virtualization', 'Cyber Defence', 'Secure Communication', 'Infrastructure'] as word}
              <span class="mx-6 font-display text-xl tracking-wide text-bone/70 md:text-3xl">{word}</span>
              <span class="text-blood-soft">✦</span>
            {/each}
          </span>
        {/each}
      </div>
    </div>

    <!-- big-number stats grid -->
    <dl class="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3">
      {#each stats as s}
        <div data-reveal="scale" use:reveal>
          <dd class="display-lg text-bone">{s.value}</dd>
          <dt class="mt-2 text-xs uppercase tracking-[0.3em] text-ash">{s.label}</dt>
        </div>
      {/each}
    </dl>

    <!-- education / experience -->
    <div class="mt-24 grid gap-12 md:grid-cols-2 md:gap-20">
      <div data-reveal use:reveal>
        <p class="mb-6 text-xs uppercase tracking-[0.5em] text-blood-soft">Career</p>
        <h3 class="display-md text-bone">Experience</h3>
        <div class="mt-8 space-y-8">
          <article class="border-l border-white/15 pl-6">
            <span class="font-display text-sm tracking-wide text-blood-soft">Present</span>
            <h4 class="mt-1 text-lg text-bone">Project Manager</h4>
            <p class="mt-2 text-sm leading-6 text-ash">
              Leading cross-functional teams across infrastructure, network, DevOps and
              cybersecurity — from software system analysis and DMS integration to end-to-end
              delivery.
            </p>
          </article>
          <article class="border-l border-white/15 pl-6">
            <span class="font-display text-sm tracking-wide text-blood-soft">—</span>
            <h4 class="mt-1 text-lg text-bone">IT Infrastructure &amp; Network Engineer</h4>
            <p class="mt-2 text-sm leading-6 text-ash">
              Ensuring the stability, security and efficiency of network systems across IT
              infrastructure.
            </p>
          </article>
        </div>
      </div>

      <div data-reveal use:reveal>
        <p class="mb-6 text-xs uppercase tracking-[0.5em] text-blood-soft">Background</p>
        <h3 class="display-md text-bone">Education</h3>
        <div class="mt-8 space-y-8">
          <article class="border-l border-white/15 pl-6">
            <span class="font-display text-sm tracking-wide text-blood-soft">Bachelor</span>
            <h4 class="mt-1 text-lg text-bone">Bachelor's Degree</h4>
            <p class="mt-2 text-sm leading-6 text-ash">
              Strong foundation in IT infrastructure and network engineering.
            </p>
          </article>
          <article class="border-l border-white/15 pl-6">
            <span class="font-display text-sm tracking-wide text-blood-soft">Certified</span>
            <h4 class="mt-1 text-lg text-bone">Professional Certifications</h4>
            <p class="mt-2 text-sm leading-6 text-ash">
              VSE+, ACMP, ACESO and CCNA — verified across vendors and technologies.
            </p>
          </article>
        </div>
      </div>
    </div>
  </div>
</section>
