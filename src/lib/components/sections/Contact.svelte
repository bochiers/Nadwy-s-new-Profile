<script lang="ts">
  import IconLink from '$lib/components/IconLink.svelte';
  import { reveal } from '$lib/actions/reveal';
  import { iconSvg } from '$lib/icons';
  import { profile } from '$lib/data';

  function submitContact(e: SubmitEvent) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message,
      '',
      '— sent via nawasena.net'
    ].join('\n');
    const to = 'nadwy@nawasena.net';
    window.location.href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }
</script>

<section id="contact" class="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
  <div class="mx-auto max-w-6xl">
    <h2 class="display-xl text-bone" data-reveal use:reveal>
      Let's<br /><span class="text-outline">talk</span>
    </h2>

    <div class="mt-16 grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
      <div class="space-y-8" data-reveal use:reveal>
        <p class="max-w-md text-base leading-7 text-bone/80">
          Have a project, a role, or a problem worth solving? Drop me a message — I usually reply
          within a day.
        </p>

        <div>
          <h3 class="text-xs uppercase tracking-[0.4em] text-blood-soft">Social</h3>
          <div class="mt-4 flex flex-wrap gap-3">
            {#each profile.socials as s}
              {@const icon = iconSvg(s.icon)}
              <IconLink href={s.href} label={s.label}>
                <svg viewBox={icon.viewBox} class="h-5 w-5 fill-current" aria-hidden="true">
                  <path d={icon.d} />
                </svg>
              </IconLink>
            {/each}
          </div>
        </div>

        <div>
          <h3 class="text-xs uppercase tracking-[0.4em] text-blood-soft">Email</h3>
          <p class="mt-3 text-sm leading-7 text-bone/85">
            <a class="transition hover:text-blood-soft" href="mailto:nadwy@nawasena.net"
              >nadwy@nawasena.net</a
            >
          </p>
        </div>

        <div>
          <h3 class="text-xs uppercase tracking-[0.4em] text-blood-soft">Phone</h3>
          <p class="mt-3 text-sm text-bone/85">
            <a class="transition hover:text-blood-soft" href="tel:+6282111627976">+62 8211 1627 976</a>
          </p>
        </div>

        <div>
          <h3 class="text-xs uppercase tracking-[0.4em] text-blood-soft">Based in</h3>
          <p class="mt-3 text-sm text-bone/85">{profile.location}, Indonesia</p>
        </div>
      </div>

      <form
        class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
        onsubmit={submitContact}
        data-reveal="right"
        use:reveal
      >
        <div class="grid gap-5 md:grid-cols-2">
          <label class="block">
            <span class="text-xs uppercase tracking-[0.25em] text-ash">Name</span>
            <input
              name="name"
              required
              class="mt-2 w-full rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm text-bone placeholder:text-ash/60 focus:border-blood-soft focus:outline-none focus:ring-1 focus:ring-blood-soft/50"
              placeholder="Your name"
            />
          </label>
          <label class="block">
            <span class="text-xs uppercase tracking-[0.25em] text-ash">Email</span>
            <input
              name="email"
              type="email"
              required
              class="mt-2 w-full rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm text-bone placeholder:text-ash/60 focus:border-blood-soft focus:outline-none focus:ring-1 focus:ring-blood-soft/50"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <label class="mt-5 block">
          <span class="text-xs uppercase tracking-[0.25em] text-ash">Subject</span>
          <input
            name="subject"
            required
            class="mt-2 w-full rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm text-bone placeholder:text-ash/60 focus:border-blood-soft focus:outline-none focus:ring-1 focus:ring-blood-soft/50"
            placeholder="What's this about?"
          />
        </label>

        <label class="mt-5 block">
          <span class="text-xs uppercase tracking-[0.25em] text-ash">Message</span>
          <textarea
            name="message"
            rows="5"
            required
            class="mt-2 w-full resize-none rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm text-bone placeholder:text-ash/60 focus:border-blood-soft focus:outline-none focus:ring-1 focus:ring-blood-soft/50"
            placeholder="Write your message…"
          ></textarea>
        </label>

        <div class="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p class="text-xs text-ash/70">Opens your email app — no data stored.</p>
          <button
            type="submit"
            class="group inline-flex items-center justify-center gap-2 rounded-full bg-bone px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-ink transition hover:bg-blood-soft hover:text-white"
          >
            Send
            <svg
              viewBox="0 0 24 24"
              class="h-4 w-4 text-ink transition-transform group-hover:translate-x-0.5 group-hover:text-white"
              aria-hidden="true"
            >
              <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
