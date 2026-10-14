<script>
  import '../app.css';
</script>

<svelte:head>
  <link rel="icon" href="/assets/img/b%20Logo-02.png" />
  <link rel="apple-touch-icon" href="/assets/img/b%20Logo-02.png" />

  <meta name="theme-color" content="#050406" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300..800&display=swap"
    rel="stylesheet"
  />

  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="grain vignette">
  <slot />
</div>
