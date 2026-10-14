<script lang="ts">
  import { profile } from '$lib/data';
  import { iconSvg } from '$lib/icons';

  let copied = false;

  const nav = [
    { href: '#story', label: 'Story' },
    { href: '#chapters', label: 'Work' },
    { href: '#resume', label: 'Resume' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' }
  ];

  async function share() {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const shareData = {
      title: `${profile.name} — Portfolio`,
      text: `${profile.name} · ${profile.tagline}`,
      url
    };
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share(shareData);
        return;
      }
      await navigator.clipboard.writeText(url);
      copied = true;
      window.setTimeout(() => (copied = false), 1800);
    } catch {
      /* user cancelled */
    }
  }
</script>

<footer class="border-t border-white/10 px-5 pb-12 pt-20 md:px-8">
  <div class="mx-auto max-w-6xl">
    <!-- big CTA row -->
    <div class="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
      <div>
        <p class="text-xs uppercase tracking-[0.5em] text-blood-soft">Keep in touch</p>
        <h2 class="display-lg mt-5 text-bone">
          Never<br /><span class="text-outline">Stop Learning</span>
        </h2>
      </div>

      <button
        type="button"
        onclick={share}
        class="group inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-bone transition hover:border-blood-soft hover:text-white"
        aria-live="polite"
      >
        {copied ? 'Link copied' : 'Share'}
        <svg
          viewBox="0 0 24 24"
          class="h-4 w-4 fill-current transition-transform group-hover:-rotate-12"
          aria-hidden="true"
        >
          <path d="M18 16.08a2.9 2.9 0 0 0-1.96.77L8.9 12.7a3.2 3.2 0 0 0 0-1.4l7.05-4.11A3 3 0 1 0 15 5c0 .24.04.47.09.69L8.09 9.8a3 3 0 1 0 0 4.4l7.12 4.16c-.05.2-.08.42-.08.64A2.87 2.87 0 1 0 18 16.08Z" />
        </svg>
      </button>
    </div>

    <!-- link columns -->
    <div class="mt-16 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 md:grid-cols-3">
      <div>
        <span class="font-display text-lg tracking-wide text-bone">NADWY</span>
        <p class="mt-3 max-w-xs text-sm leading-6 text-ash">
          {profile.role} — building reliable, secure and scalable technology.
        </p>
      </div>

      <nav aria-label="Footer">
        <p class="text-xs uppercase tracking-[0.3em] text-ash/70">Navigate</p>
        <ul class="mt-4 space-y-2">
          {#each nav as n}
            <li>
              <a
                href={n.href}
                class="text-sm text-bone/85 transition hover:text-blood-soft hover:tracking-wide"
              >
                {n.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>

      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-ash/70">Elsewhere</p>
        <div class="mt-4 flex flex-wrap gap-2">
          {#each profile.socials as s}
            {@const icon = iconSvg(s.icon)}
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              title={s.label}
              class="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-bone transition hover:-translate-y-0.5 hover:border-blood-soft hover:text-white motion-reduce:transform-none"
            >
              <svg viewBox={icon.viewBox} class="h-4 w-4 fill-current" aria-hidden="true">
                <path d={icon.d} />
              </svg>
            </a>
          {/each}
        </div>
      </div>
    </div>

    <div
      class="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-ash md:flex-row md:items-center md:justify-between"
    >
      <p>© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
      <a href="#main" class="inline-flex items-center gap-2 transition hover:text-blood-soft">
        <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-current"><path d="M12 7.5 5.5 14l1.4 1.4L12 10.3l5.1 5.1L18.5 14 12 7.5Z" /></svg>
        Back to top
      </a>
    </div>
  </div>
</footer>
