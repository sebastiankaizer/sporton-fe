# Sporton FE

Selamat datang di repositori **Sporton FE**. Ini adalah basis kode frontend untuk platform Sporton, dikembangkan dengan teknologi modern untuk memastikan performa tinggi, skalabilitas, dan kemudahan pemeliharaan (_maintainability_).

Proyek ini menggunakan **Next.js App Router** sebagai fondasi utama, dirancang untuk memberikan pengalaman pengguna (User Experience) yang optimal serta struktur kode yang bersih dan standar.

## 🛠️ Tech Stack

Kami menggunakan serangkaian alat pengembangan terbaik di kelasnya untuk mendukung stabilitas dan kecepatan aplikasi:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router enabled) - Framework React siap produksi dengan fitur terbaru.
- **Library**: [React 19](https://react.dev/) - Menggunakan fitur-fitur mutakhir dari ekosistem React.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework untuk pengembangan antarmuka yang cepat dan konsisten.
- **Package Manager**: `pnpm` - Pengelola paket yang efisien dalam penggunaan disk dan kecepatan instalasi.
- **Icons**: `react-icons`
- **Notifications**: `react-toastify`

## 📂 Project Structure

Struktur direktori disusun mengikuti praktik terbaik (_best practices_) Next.js App Router, memanfaatkan fitur **Route Groups** untuk pemisahan logika yang jelas.

```bash
app/
├── (landing)/        # Halaman publik (Marketing, Landing Page)
│   ├── components/   # Komponen UI spesifik untuk landing page (Hero, Products, dll)
│   └── page.tsx      # Titik masuk utama (Main entry point)
├── (dashboard)/      # Area pengguna yang memerlukan otentikasi (Dalam Pengembangan)
└── layout.tsx        # Tata letak utama aplikasi (Root layout)
```

### Key Features

Saat ini pengembangan difokuskan pada **Landing Page** dengan fitur-fitur berikut:

- **Hero Section**: Bagian utama yang dirancang untuk menarik perhatian pengguna.
- **Categories**: Navigasi intuitif untuk menelusuri kategori produk atau olahraga.
- **Featured Products**: Menampilkan produk-produk unggulan.
- **Responsive Design**: Tampilan yang adaptif dan optimal untuk berbagai ukuran layar (Desktop & Mobile).

## 🚀 Getting Started

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lokal Anda. Pastikan Node.js sudah terinstal.

1.  **Clone repository:**

    ```bash
    git clone https://github.com/sebastiankaizer/sporton-fe.git
    cd sporton-fe
    ```

2.  **Install dependencies:**
    Disarankan menggunakan `pnpm` untuk efisiensi.

    ```bash
    pnpm install
    # atau
    npm install
    ```

3.  **Jalankan Development Server:**

    ```bash
    pnpm dev
    ```

4.  **Akses Aplikasi:**
    Buka browser dan kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## 🤝 Contribution

Kontribusi sangat kami harapkan. Jika Anda menemukan _bug_ atau memiliki saran _refactoring_ untuk kode yang lebih baik, silakan buat **Issue** atau kirimkan **Pull Request**. Kami mengutamakan _clean code_ dan diskusi yang konstruktif.

---

Dikembangkan oleh Tim Sporton.
