# Dokumentasi Lengkap: Cara Edit Website TradeX

## Daftar Isi
1. [Struktur Project](#struktur-project)
2. [Halaman Website](#halaman-website)
3. [Komponen Utama](#komponen-utama)
4. [Cara Edit Konten](#cara-edit-konten)
5. [Cara Edit Styling/Warna](#cara-edit-stylingwarna)
6. [Cara Edit Animasi](#cara-edit-animasi)
7. [Cara Menambah Gambar](#cara-menambah-gambar)
8. [Panduan Komponen UI](#panduan-komponen-ui)
9. [Tips & Best Practices](#tips--best-practices)

---

## Struktur Project

```
tradex-website/
├── client/                     # Frontend React
│   └── src/
│       ├── App.tsx            # Router utama
│       ├── index.css          # Styling global & warna
│       ├── pages/             # Halaman-halaman website
│       │   ├── Home.tsx       # Halaman utama (PitchDeck)
│       │   ├── About.tsx      # Halaman tentang
│       │   ├── BusinessModel.tsx  # Halaman business model
│       │   ├── Financials.tsx # Halaman finansial
│       │   └── Contact.tsx    # Halaman kontak
│       ├── components/        # Komponen-komponen
│       │   ├── Navbar.tsx     # Menu navigasi
│       │   ├── Footer.tsx     # Footer website
│       │   ├── HeroSection.tsx    # Section hero
│       │   ├── ProblemSection.tsx # Section masalah
│       │   └── ... (komponen lainnya)
│       └── components/ui/     # Komponen UI (Button, Card, dll)
├── server/                    # Backend Express
├── shared/                    # Shared types/schemas
└── attached_assets/           # Gambar & asset
```

---

## Halaman Website

### 1. Home (PitchDeck) - `/`
**File:** `client/src/pages/Home.tsx`

Halaman utama yang berisi semua section pitch deck:
```
- Navbar (navigasi)
- HeroSection (judul utama)
- ProblemSection (masalah yang diselesaikan)
- MarketChallenge (tantangan pasar)
- MarketOpportunity (peluang pasar)
- EcosystemSection (ekosistem TradeX)
- BusinessModelSection (ringkasan bisnis model)
- GoToMarketSection (strategi go-to-market)
- BreakEvenSection (analisis break even)
- TeamSection (tim)
- InvestmentSection (investasi)
- FundingAskSection (permintaan pendanaan)
- ThankYouSection (penutup/terima kasih)
- CTASection (call-to-action)
- Footer
```

### 2. About - `/about`
**File:** `client/src/pages/About.tsx`

Halaman tentang TradeX:
- MissionVisionValues (misi, visi, nilai)
- WhyChooseTradeX (mengapa pilih TradeX)
- TeamSection (tim)
- JourneyTimeline (perjalanan)

### 3. Business Model - `/business-model`
**File:** `client/src/pages/BusinessModel.tsx`

Halaman Business Model Canvas dengan:
- Background animasi floating icons
- BusinessModelCanvas (9 blok BMC)

### 4. Financials - `/financials`
**File:** `client/src/pages/Financials.tsx`

Halaman proyeksi finansial:
- FloatingCoins (animasi koin)
- RevenueStreams (aliran pendapatan)
- FinancialProjections (proyeksi finansial)
- InvestmentOpportunity (peluang investasi)

### 5. Contact - `/contact`
**File:** `client/src/pages/Contact.tsx`

Halaman kontak dengan form.

---

## Komponen Utama

### Navbar
**File:** `client/src/components/Navbar.tsx`

**Cara Edit Menu Navigasi:**
```tsx
const navLinks = [
  { path: "/", label: "PitchDeck" },
  { path: "/business-model", label: "Business Model" },
  { path: "/financials", label: "Financials" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" }
];
```
Tambah/hapus item di array ini untuk mengubah menu.

### Footer
**File:** `client/src/components/Footer.tsx`

Berisi informasi kontak, link navigasi, dan sosial media.

### HeroSection
**File:** `client/src/components/HeroSection.tsx`

**Cara Edit Judul Utama:**
```tsx
<h1>
  <span className="title-line block">Trade Smarter.</span>
  <span className="title-line block">Learn Faster.</span>
  <span className="title-line block">Grow Together.</span>
</h1>
```

**Cara Edit Subtitle:**
```tsx
<p>Platform Trading Terbaik dengan General Mindset untuk Generasi Millenial</p>
```

### ThankYouSection
**File:** `client/src/components/ThankYouSection.tsx`

**Cara Edit Informasi Kontak Founder:**
```tsx
const contactInfo = {
  name: "Poernomo Setyadi",
  role: "Founder & CEO",
  email: "founder@tradex.id",
  phone: "+62 822-6888-0707",
  website: "www.tradex.id",
  pitchEmail: "pitch@tradex.id",
  calendly: "calendly.com/tradex-founder"
};

const tagline = "Trade Smarter, Learn Faster, Grow Together";
```

### TeamSection
**File:** `client/src/components/TeamSection.tsx`

**Cara Edit Data Tim:**
Cari array `teamMembers` dan edit:
```tsx
const teamMembers = [
  {
    name: "Nama Anggota",
    role: "Jabatan",
    image: "path/to/image",
    linkedin: "https://linkedin.com/..."
  },
  // ... anggota lainnya
];
```

### ProblemSection
**File:** `client/src/components/ProblemSection.tsx`

**Cara Edit Daftar Masalah:**
```tsx
const problems = [
  {
    icon: DollarSign,  // Icon dari lucide-react
    title: "Edukasi yang Mahal & Sulit Diakses",
    description: "Kursus offline Rp 5-15 juta...",
    color: "text-red-400"
  },
  // ... masalah lainnya
];
```

---

## Cara Edit Konten

### 1. Edit Teks Biasa
Buka file komponen yang ingin diedit, cari teks yang ingin diubah:
```tsx
// Sebelum
<h1>Business Model Canvas</h1>

// Sesudah
<h1>Model Bisnis TradeX</h1>
```

### 2. Edit Data Array (List/Daftar)
Banyak komponen menggunakan array untuk menampilkan daftar:
```tsx
const items = [
  { title: "Item 1", description: "Deskripsi 1" },
  { title: "Item 2", description: "Deskripsi 2" },
];
```
Tambah, hapus, atau edit item dalam array.

### 3. Edit Angka/Statistik
Cari variabel yang menyimpan angka:
```tsx
const stats = {
  totalMembers: 10000,
  revenue: "Rp 5 Miliar",
  growthRate: "300%"
};
```

---

## Cara Edit Styling/Warna

### Warna Utama (Gold/Emas)
**File:** `client/src/index.css`

```css
:root {
  --primary: 43 74% 52%;        /* Warna gold utama */
  --primary-foreground: 0 0% 0%; /* Teks di atas gold */
}
```

### Class Utility Warna
- `text-gold-gradient` - Teks dengan gradient gold
- `text-primary` - Teks warna gold
- `bg-primary` - Background gold
- `border-primary` - Border gold
- `text-muted-foreground` - Teks abu-abu

### Contoh Penggunaan
```tsx
<h1 className="text-gold-gradient">Judul Gold</h1>
<p className="text-muted-foreground">Teks abu-abu</p>
<Button className="bg-primary">Tombol Gold</Button>
```

### Background Gradient
```tsx
<div className="bg-gradient-to-b from-black/70 via-black/50 to-black/80">
  {/* Konten */}
</div>
```

---

## Cara Edit Animasi

### GSAP Animation Pattern
Website menggunakan GSAP untuk animasi. Pattern umum:

**1. Floating Elements (seperti koin/icon):**
```tsx
gsap.set(element, {
  x: `${randomX}vw`,
  y: `${randomY}vh`,
  opacity: 0.1,
});

gsap.to(element, {
  y: `${randomY + 10}vh`,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});
```

**2. Scroll-triggered Animation:**
```tsx
ScrollTrigger.create({
  trigger: section,
  start: "top 75%",
  onEnter: () => {
    gsap.to(element, { opacity: 1, y: 0 });
  }
});
```

### Komponen dengan Animasi
- `HeroSection.tsx` - GoldParticles (partikel gold)
- `Financials.tsx` - FloatingCoins (koin melayang)
- `BusinessModel.tsx` - FloatingBMCElements (icon BMC)
- `ThankYouSection.tsx` - Sparkle animations

### Cara Mengubah Kecepatan Animasi
```tsx
// Lambatkan animasi (duration lebih besar)
duration: 10,  // 10 detik

// Percepat animasi (duration lebih kecil)
duration: 2,   // 2 detik
```

---

## Cara Menambah Gambar

### 1. Upload Gambar
Letakkan gambar di folder `attached_assets/`

### 2. Import Gambar
```tsx
import myImage from "@assets/nama-gambar.png";
```

### 3. Gunakan Gambar
```tsx
<img src={myImage} alt="Deskripsi gambar" className="w-full h-auto" />
```

### Folder Gambar
- `attached_assets/` - Gambar utama
- `attached_assets/generated_images/` - Gambar yang di-generate

### Gambar Background dengan Overlay
```tsx
<div className="relative">
  <img 
    src={backgroundImage} 
    alt="Background"
    className="w-full h-full object-cover opacity-[0.15]"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80" />
</div>
```

---

## Panduan Komponen UI

### Button
```tsx
import { Button } from "@/components/ui/button";

// Button gold (primary)
<Button>Klik Saya</Button>

// Button outline
<Button variant="outline">Outline</Button>

// Button besar
<Button size="lg">Tombol Besar</Button>

// Button dengan icon
<Button>
  <IconName className="w-5 h-5" />
  Dengan Icon
</Button>
```

### Card
```tsx
import { Card, CardContent } from "@/components/ui/card";

<Card className="bg-black/60 border-primary/50">
  <CardContent className="p-6">
    {/* Konten card */}
  </CardContent>
</Card>
```

### Badge
```tsx
import { Badge } from "@/components/ui/badge";

<Badge variant="outline" className="border-primary/30 text-primary">
  Label
</Badge>
```

### Icon (Lucide React)
```tsx
import { Mail, Phone, Globe, ArrowRight } from "lucide-react";

<Mail className="w-6 h-6 text-primary" />
<Phone className="w-5 h-5" />
```

Daftar icon lengkap: https://lucide.dev/icons

---

## Tips & Best Practices

### 1. Sebelum Edit
- Pastikan server berjalan (`npm run dev`)
- Buka website di browser untuk melihat perubahan langsung

### 2. Naming Convention
- Komponen: PascalCase (`HeroSection`, `TeamSection`)
- File: PascalCase untuk komponen (`HeroSection.tsx`)
- CSS class: kebab-case (`text-gold-gradient`)

### 3. Data Test ID
Setiap elemen interaktif harus punya `data-testid`:
```tsx
<button data-testid="button-submit">Submit</button>
<h1 data-testid="text-hero-title">Judul</h1>
```

### 4. Responsive Design
Gunakan class Tailwind untuk responsive:
```tsx
<h1 className="text-3xl md:text-5xl lg:text-6xl">
  Judul Responsive
</h1>
```
- `md:` - Tablet ke atas (768px+)
- `lg:` - Desktop (1024px+)

### 5. Hindari
- Jangan edit `package.json` secara langsung
- Jangan edit `vite.config.ts` atau `server/vite.ts`
- Jangan edit `drizzle.config.ts`

### 6. Struktur Section Baru
```tsx
export default function NewSection() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gold-gradient mb-8">
          Judul Section
        </h2>
        {/* Konten section */}
      </div>
    </section>
  );
}
```

---

## Quick Reference

### File Penting untuk Edit Konten
| Apa yang ingin diedit | File |
|----------------------|------|
| Menu navigasi | `client/src/components/Navbar.tsx` |
| Judul hero | `client/src/components/HeroSection.tsx` |
| Info founder | `client/src/components/ThankYouSection.tsx` |
| Data tim | `client/src/components/TeamSection.tsx` |
| Problem/masalah | `client/src/components/ProblemSection.tsx` |
| Finansial | `client/src/components/FinancialProjections.tsx` |
| Footer | `client/src/components/Footer.tsx` |
| Warna global | `client/src/index.css` |

### Perintah Penting
```bash
npm run dev     # Jalankan development server
npm run build   # Build untuk production
```

---

## Butuh Bantuan?

Jika ada pertanyaan atau butuh bantuan lebih lanjut untuk mengedit website, silakan tanyakan!
