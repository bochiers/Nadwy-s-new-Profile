# Website Profile (SvelteKit + Tailwind CSS)

Konversi dari website statis (HTML + Bootstrap template) ke **SvelteKit** dengan **Tailwind CSS v4** untuk styling.

## Struktur

- `src/routes/+page.svelte` — halaman utama (Home/About/Portfolio/Contact)
- `src/routes/portfolio/[slug]/+page.svelte` — halaman detail portfolio
- `src/lib/data.ts` — data profil + portfolio (ubah isi di sini)
- `static/assets/` — asset lama (gambar, vendor, dll) untuk dipakai di Svelte
- `legacy/` — file HTML lama (disimpan sebagai referensi)

## Menjalankan (butuh Node.js)

```bash
npm install
npm run dev
```

## Catatan

- Form PHP lama (`static/forms/contact.php`) tidak akan jalan jika deploy sebagai static site. Kalau mau form beneran, tambahkan endpoint API sendiri atau pakai layanan form (Formspree, dsb).
# Nadwy-s-Portfolio
# Nadwy-s-Portfolio
