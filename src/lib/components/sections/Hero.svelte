<script lang="ts">
  import { profile } from '$lib/data';
  import { scramble } from '$lib/actions/scramble';
</script>

<!-- Fullscreen hero, Goonies-style big display type with a riddle/intro -->
<section class="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-5 pb-10 pt-28 md:px-8">
  <!-- faint blood glow -->
  <div
    class="pointer-events-none absolute -left-40 top-1/3 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl"
    style="background: radial-gradient(circle, rgba(108,14,17,.55), transparent 62%)"
  ></div>
  <div
    class="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
    style="background: radial-gradient(circle, rgba(143,20,24,.5), transparent 65%)"
  ></div>

  <div class="relative z-10 flex items-start justify-between text-[11px] uppercase tracking-[0.4em] text-ash">
    <span>{profile.location}</span>
    <span class="hidden sm:block" use:scramble={{ trigger: 'loop' }}>{profile.role}</span>
  </div>

  <div class="relative z-10">
    <p class="mb-4 text-xs uppercase tracking-[0.5em] text-blood-soft md:mb-6">
      The story of
    </p>
    <h1 class="display-xl text-bone">
      <span class="will-rise"><span>Nadwy</span></span>
      <span class="will-rise" style="animation-delay:.08s"><span class="text-outline">Anshary</span></span>
    </h1>

    <p class="mt-8 max-w-xl text-sm leading-6 text-ash md:mt-10 md:text-base">
      {profile.introLine}
    </p>
  </div>

  <div class="relative z-10 flex flex-wrap items-center justify-between gap-6">
    <a
      href="#story"
      class="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-bone"
    >
      <span class="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition group-hover:border-blood-soft">
        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M12 16.5 5.5 10l1.4-1.4L12 13.7l5.1-5.1L18.5 10 12 16.5Z" />
        </svg>
      </span>
      Scroll to explore
    </a>
    <span class="text-[11px] uppercase tracking-[0.4em] text-ash" use:scramble={{ trigger: 'loop' }}>
      {profile.tagline}
    </span>
  </div>
</section>
