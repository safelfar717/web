# Cara Deploy Website TradeX ke Netlify

Website sudah di-build dan siap untuk di-deploy ke Netlify!

---

## Lokasi File Build

Semua file yang siap di-upload ada di folder:
```
dist/public/
```

Isi folder tersebut:
- `index.html` - File HTML utama
- `assets/` - CSS, JavaScript, dan gambar-gambar
- `favicon.png` - Icon website

---

## Metode 1: Drag & Drop (Paling Mudah)

1. **Buka Netlify**: Kunjungi [app.netlify.com](https://app.netlify.com)

2. **Login/Daftar**: Buat akun atau login dengan GitHub/GitLab/Email

3. **Drag & Drop**:
   - Di dashboard Netlify, scroll ke bawah
   - Cari area "Want to deploy a new site without connecting to Git?"
   - **Drag folder `dist/public`** langsung ke area tersebut
   - Tunggu proses upload selesai (biasanya 30-60 detik)

4. **Selesai!** Website kamu akan mendapat URL seperti:
   `https://random-name-12345.netlify.app`

5. **Ganti Nama Domain** (opsional):
   - Klik "Site settings" > "Change site name"
   - Masukkan nama yang diinginkan, misal: `tradex-indonesia`
   - URL menjadi: `https://tradex-indonesia.netlify.app`

---

## Metode 2: Netlify CLI (Untuk Developer)

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login ke Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   netlify deploy --dir=dist/public --prod
   ```

---

## Metode 3: Connect GitHub (Continuous Deployment)

Jika project ini ada di GitHub:

1. **Push ke GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Di Netlify**:
   - Klik "Add new site" > "Import an existing project"
   - Pilih "GitHub"
   - Pilih repository TradeX
   - Setting build:
     - Build command: `npm run build`
     - Publish directory: `dist/public`
   - Klik "Deploy"

3. **Auto-deploy**: Setiap push ke GitHub akan otomatis di-deploy

---

## Konfigurasi Sudah Tersedia

File `netlify.toml` sudah dikonfigurasi dengan:
- Build command: `npm run build`
- Publish directory: `dist/public`
- SPA routing: Redirect semua route ke index.html
- Security headers
- Cache untuk assets

---

## Custom Domain (Opsional)

Untuk menggunakan domain sendiri (misal: tradex.id):

1. Di Netlify, buka "Site settings" > "Domain management"
2. Klik "Add custom domain"
3. Masukkan domain kamu
4. Ikuti instruksi untuk setting DNS

---

## Troubleshooting

### Halaman Blank Setelah Deploy?
- Pastikan folder yang di-upload adalah `dist/public` (bukan `dist` saja)
- Cek Console browser untuk error

### Routing Tidak Bekerja?
- Pastikan file `netlify.toml` ada di root project
- Atau tambahkan file `_redirects` di `dist/public` dengan isi:
  ```
  /*    /index.html   200
  ```

### Gambar Tidak Muncul?
- Pastikan folder `assets` ter-upload dengan lengkap
- Refresh browser dengan Ctrl+F5

---

## Struktur File yang Di-upload

```
dist/public/
├── index.html          (1 KB)
├── favicon.png
└── assets/
    ├── index-xxx.css   (104 KB)
    ├── index-xxx.js    (946 KB)
    └── [30+ gambar PNG/JPG]
```

Total ukuran: ~35 MB

---

## Tips

1. **Backup**: Simpan folder `dist/public` sebelum melakukan perubahan
2. **Preview**: Gunakan "Deploy Preview" di Netlify untuk testing sebelum production
3. **Analytics**: Aktifkan Netlify Analytics untuk melihat statistik visitor

---

Selamat! Website TradeX kamu sudah siap online!
