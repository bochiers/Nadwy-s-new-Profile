<script lang="ts">
  import { onMount } from 'svelte';
  import LoadingOverlay from '$lib/components/LoadingOverlay.svelte';
  import PulseNav from '$lib/components/PulseNav.svelte';
  import ScrollProgress from '$lib/components/ScrollProgress.svelte';
  import Cursor from '$lib/components/Cursor.svelte';
  import Hero from '$lib/components/sections/Hero.svelte';
  import Story from '$lib/components/sections/Story.svelte';
  import Chapters from '$lib/components/sections/Chapters.svelte';
  import Skills from '$lib/components/sections/Skills.svelte';
  import Resume from '$lib/components/sections/Resume.svelte';
  import Gallery from '$lib/components/sections/Gallery.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
  import Footer from '$lib/components/sections/Footer.svelte';
  import { profile } from '$lib/data';

  const nav = [
    { href: '#story', label: 'Story' },
    { href: '#chapters', label: 'Chapters' },
    { href: '#resume', label: 'Resume' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' }
  ];

  let active = '';

  onMount(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) active = `#${(entry.target as HTMLElement).id}`;
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>{profile.name} — {profile.tagline}</title>
  <meta name="description" content={`${profile.name} — ${profile.role}, ${profile.tagline}.`} />
</svelte:head>

<LoadingOverlay />

<ScrollProgress />
<Cursor />

<a
  href="#main"
  class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-lg focus:bg-bone focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
  >Skip to content</a
>

<PulseNav items={nav} {active} />

<main id="main">
  <Hero />
  <Story />
  <Chapters />
  <Skills />
  <Resume />
  <Gallery />
  <Contact />
  <Footer />
</main>
