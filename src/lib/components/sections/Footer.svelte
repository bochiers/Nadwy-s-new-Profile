<script lang="ts">
  import { profile } from '$lib/data';

  let copied = false;

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

<footer class="border-t border-white/10 px-5 py-16 md:px-8">
  <div class="mx-auto max-w-6xl">
    <div class="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
      <div>
        <h2 class="display-lg text-bone">Never<br /><span class="text-outline">Stop Learning</span></h2>
      </div>

      <button
        type="button"
        onclick={share}
        class="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-bone transition hover:border-blood-soft hover:text-white"
      >
        {copied ? 'Link copied' : 'Share'}
        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M18 16.08a2.9 2.9 0 0 0-1.96.77L8.9 12.7a3.2 3.2 0 0 0 0-1.4l7.05-4.11A3 3 0 1 0 15 5c0 .24.04.47.09.69L8.09 9.8a3 3 0 1 0 0 4.4l7.12 4.16c-.05.2-.08.42-.08.64A2.87 2.87 0 1 0 18 16.08Z" />
        </svg>
      </button>
    </div>

    <div class="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-ash md:flex-row md:items-center md:justify-between">
      <p>Created by {profile.name} · Portfolio</p>
      <div class="flex items-center gap-6">
        <a href="/" class="transition hover:text-blood-soft">Back to top</a>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </div>
  </div>
</footer>
