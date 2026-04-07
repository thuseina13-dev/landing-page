# Landing Page Project

Proyek ini adalah sebuah modern landing page yang dibangun menggunakan **React**, **Vite**, dan **TypeScript**. Proyek ini menampilkan desain interaktif dengan berbagai komponen seperti rak buku, periferal, dan informasi popup.

## 🚀 Fitur Utama

- **Modern UI/UX**: Tampilan premium dengan fokus pada estetika dan interaksi.
- **Fast Development**: Menggunakan Vite untuk pengalaman pengembangan yang sangat cepat.
- **Type Safety**: Dibangun sepenuhnya dengan TypeScript untuk meminimalisir bug.
- **Responsive Design**: Dirancang agar optimal di berbagai ukuran layar.

## 📁 Struktur Folder

Berikut adalah struktur direktori utama dalam proyek ini:

```text
landing-page/
├── public/              # Aset publik statis
├── src/
│   ├── assets/          # Media, gambar, dan ikon
│   ├── scene/           # Komponen level halaman (Contoh: main_page)
│   ├── shered/          # Shared components (Komponen yang digunakan berulang)
│   │   ├── bookshelf/   # Komponen rak buku
│   │   ├── periferal/   # Komponen periferal
│   │   ├── pop_up_information/ # Komponen modal/popup
│   │   └── title_page/  # Komponen judul halaman
│   ├── App.tsx          # Komponen utama aplikasi
│   ├── main.tsx         # Entry point aplikasi
│   └── index.css        # Gaya global
├── index.html           # File HTML utama
├── package.json         # Konfigurasi dependensi dan skrip
├── tsconfig.json        # Konfigurasi TypeScript
└── vite.config.ts       # Konfigurasi Vite
```

> [!NOTE]
> Folder `shered` digunakan sebagai tempat penyimpanan komponen yang dapat digunakan kembali di berbagai bagian aplikasi.

## 🛠️ Persyaratan

Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (Rekomendasi versi terbaru LTS)
- [npm](https://www.npmjs.com/) (Biasanya otomatis terinstal dengan Node.js)

## 🏗️ Setup Proyek

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek di komputer lokal Anda:

1. **Clone repositori ini:**
   ```bash
   git clone <link-repositori>
   cd landing-page
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   ```
   Aplikasi akan tersedia di `http://localhost:5173`.

## 📦 Skrip yang Tersedia

Dalam proyek ini, Anda bisa menjalankan perintah berikut:

- `npm run dev` : Menjalankan aplikasi dalam mode pengembangan.
- `npm run build` : Membangun aplikasi untuk produksi ke dalam folder `dist`.
- `npm run lint` : Menjalankan ESLint untuk mengecek kualitas kode.
- `npm run preview` : Menjalankan server lokal untuk melihat hasil build produksi.
- `npm run deploy` : Melakukan deployment aplikasi ke **GitHub Pages**.

## 🎨 Teknologi yang Digunakan

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Deployment**: [gh-pages](https://www.npmjs.com/package/gh-pages)
