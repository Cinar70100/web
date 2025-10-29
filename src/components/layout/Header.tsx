// src/components/layout/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
// İkonları import ediyoruz (henüz yüklemedik ama hazır olsun)
// import { Facebook, Twitter, Instagram, Youtube, Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50"> {/* sticky top-0 z-50 eklendi */}
      {/* 1. Üst Bar (Top Bar) */}
      <div className="bg-gray-800 text-white text-xs">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Sol: Sosyal Medya & İletişim (Placeholder) */}
          <div className="flex items-center space-x-3">
            {/* Sosyal ikonlar buraya eklenecek */}
            <span className="opacity-70 hover:opacity-100 cursor-pointer">FB</span>
            <span className="opacity-70 hover:opacity-100 cursor-pointer">TW</span>
            <span className="opacity-70 hover:opacity-100 cursor-pointer">IG</span>
            <span className="hidden sm:inline-block opacity-70">|</span>
            <span className="hidden sm:inline-flex items-center opacity-70">
              {/* <Phone size={14} className="mr-1" /> */}
              0553 XXX XX XX
            </span>
             <span className="hidden sm:inline-flex items-center opacity-70">
              {/* <Mail size={14} className="mr-1" /> */}
              info@karamanevbul.com
            </span>
          </div>

          {/* Sağ: Dil, Giriş, Kayıt, İlan Ver */}
          <div className="flex items-center space-x-3">
            {/* Dil Seçimi (Placeholder) */}
            <select className="bg-gray-700 text-white text-xs rounded p-1 focus:outline-none">
              <option value="tr">TR</option>
              <option value="en">EN</option>
            </select>
            <Link href="/giris" className="hover:text-blue-400">Giriş Yap</Link>
            <span className="opacity-70">|</span>
            <Link href="/kayit" className="hover:text-blue-400">Kayıt Ol</Link>
            <Link href="/ilan-ver" className="ml-2 px-3 py-1.5 bg-blue-600 text-white rounded-md text-xs font-medium hover:bg-blue-700 whitespace-nowrap">
              Ücretsiz İlan Ver
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Ana Menü Barı */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Sol Taraf: Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo-site.png" // public klasöründeki logonuz
                alt="Karaman Ev Bul"
                width={200} // Logonuzun boyutuna göre ayarlayın
                height={45} // Logonuzun boyutuna göre ayarlayın
                priority
                className="h-11 w-auto" // Yüksekliği sabit tuttuk
              />
            </Link>
          </div>

          {/* Orta: Ana Menü Linkleri */}
          {/* Mobil için gizlenip, orta boyutta flex gösterilecek */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Ana Sayfa</Link>
            <Link href="/satilik" className="text-gray-700 hover:text-blue-600 font-medium">Satılık</Link>
            <Link href="/kiralik" className="text-gray-700 hover:text-blue-600 font-medium">Kiralık</Link>
            <Link href="/gunluk-kiralik" className="text-gray-700 hover:text-blue-600 font-medium">Günlük Kiralık</Link>
            <Link href="/projeler" className="text-gray-700 hover:text-blue-600 font-medium">Projeler</Link>
            <Link href="/emlak-ofisleri" className="text-gray-700 hover:text-blue-600 font-medium">Emlak Ofisleri</Link>
            <Link href="/haberler" className="text-gray-700 hover:text-blue-600 font-medium">Haberler</Link>
            {/* Diğer linkler dropdown menü olarak eklenebilir */}
          </div>

          {/* Sağ Taraf: İlan Ara Butonu (Eski sitede yoktu ama kullanışlı olabilir) */}
          <div className="hidden lg:flex">
             <Link href="/ilan-ara" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 border border-gray-300">
               Detaylı Ara
             </Link>
          </div>


          {/* Mobil Menü Butonu */}
          <div className="lg:hidden">
            <button className="text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}