# 🚀 Panduan Deploy ke Netlify

## Cara 1: Deploy Otomatis dari GitHub (RECOMMENDED)

### Langkah-langkah:

1. **Push code ke GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Login ke Netlify**
   - Buka [netlify.com](https://netlify.com)
   - Login dengan akun GitHub kamu

3. **Import Project**
   - Klik **"Add new site"** → **"Import an existing project"**
   - Pilih **GitHub** sebagai Git provider
   - Authorize Netlify untuk akses GitHub repository
   - Pilih repository project ini

4. **Konfigurasi Build Settings**
   
   Netlify akan otomatis detect settings dari `netlify.toml`, tapi pastikan:
   
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
   - **Branch to deploy**: `main`

5. **Deploy!**
   - Klik **"Deploy site"**
   - Netlify akan build dan deploy otomatis
   - Setiap push ke GitHub akan trigger auto-deploy

---

## Cara 2: Deploy Manual dengan Netlify CLI

### Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Login ke Netlify
```bash
netlify login
```

### Build & Deploy
```bash
# Build aplikasi
npm run build

# Deploy ke Netlify
netlify deploy --prod --dir=dist/public
```

---

## Cara 3: Deploy dengan GitHub Actions (Optional)

File `.github/workflows/netlify-deploy.yml` sudah dibuat. Untuk menggunakannya:

1. **Dapatkan Netlify Tokens**
   - Login ke Netlify
   - Go to **User settings** → **Applications** → **Personal access tokens**
   - Generate new access token
   - Copy `NETLIFY_AUTH_TOKEN`

2. **Dapatkan Site ID**
   - Buka site di Netlify dashboard
   - Go to **Site settings** → **General**
   - Copy `Site ID` (atau buat site baru dulu)

3. **Setup GitHub Secrets**
   - Buka GitHub repository
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Add secrets:
     - `NETLIFY_AUTH_TOKEN`: Token dari langkah 1
     - `NETLIFY_SITE_ID`: Site ID dari langkah 2

4. **Push ke GitHub**
   - GitHub Actions akan otomatis run dan deploy

---

## Environment Variables

Jika aplikasi butuh environment variables (API keys, dll):

1. **Via Netlify Dashboard**:
   - Site settings → Build & deploy → Environment
   - Add variables yang dibutuhkan

2. **Via netlify.toml**:
   ```toml
   [build.environment]
     MY_API_KEY = "your-key-here"
   ```

⚠️ **JANGAN** commit API keys ke Git!

---

## Custom Domain

Setelah deploy:

1. **Netlify Subdomain** (gratis):
   - `your-site-name.netlify.app`
   - Bisa diganti di Site settings → Domain management

2. **Custom Domain** (butuh domain sendiri):
   - Site settings → Domain management → Add custom domain
   - Update DNS records sesuai instruksi Netlify

---

## Troubleshooting

### Build Gagal?
- Check build logs di Netlify dashboard
- Pastikan `npm run build` works di local
- Verify Node version (gunakan Node 20)

### Routing Tidak Work?
- Pastikan ada redirect rule di `netlify.toml`:
  ```toml
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

### Assets Tidak Load?
- Check base path di Vite config
- Verify publish directory: `dist/public`

---

## Build Info

**Build Command**: `npm run build`
- Frontend build: Vite → `dist/public`
- Backend bundle: esbuild → `dist/index.js`

**Deploy Output**: `dist/public`
- Berisi: HTML, CSS, JS, dan assets frontend
- Ready untuk static hosting

**Note**: Backend (`dist/index.js`) tidak di-deploy ke Netlify karena Netlify adalah static hosting. Jika butuh backend, gunakan:
- Netlify Functions (serverless)
- Deploy backend terpisah (Heroku, Railway, dll)
- Atau gunakan Replit Deployment untuk full-stack

---

## Links Berguna

- 📚 [Netlify Docs](https://docs.netlify.com/)
- 🔧 [Netlify CLI Docs](https://cli.netlify.com/)
- 💬 [Netlify Support](https://answers.netlify.com/)
