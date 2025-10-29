// src/components/layout/Footer.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Üst Sosyal Medya Barı */}
      <div className="bg-blue-600 text-white py-3 text-center text-sm tracking-wide">
        <span className="font-medium">Bizi Sosyal Medyada Takip Edin:</span>
        <div className="inline-flex items-center gap-4 ml-3">
          <Link href="#" aria-label="Facebook" className="hover:text-gray-200 transition-colors">
            <Facebook size={18} />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-gray-200 transition-colors">
            <Twitter size={18} />
          </Link>
          <Link href="#" aria-label="YouTube" className="hover:text-gray-200 transition-colors">
            <Youtube size={18} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-gray-200 transition-colors">
            <Linkedin size={18} />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-gray-200 transition-colors">
            <Instagram size={18} />
          </Link>
        </div>
      </div>

      {/* Ana Footer İçeriği */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Kurumsal */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4 border-b-2 border-blue-600 inline-block pb-1">
            Kurumsal
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/hakkimizda" className="hover:text-blue-400 transition-colors">Hakkımızda</Link></li>
            <li><Link href="/iletisim" className="hover:text-blue-400 transition-colors">İletişim</Link></li>
            <li><Link href="/destek" className="hover:text-blue-400 transition-colors">Destek Merkezi</Link></li>
            <li><Link href="/yardim" className="hover:text-blue-400 transition-colors">Yardım</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Hizmetler */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4 border-b-2 border-blue-600 inline-block pb-1">
            Hizmetlerimiz
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/doping" className="hover:text-blue-400 transition-colors">Doping</Link></li>
            <li><Link href="/reklam" className="hover:text-blue-400 transition-colors">Reklam</Link></li>
          </ul>
        </div>

        {/* Emlak Ofisleri */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4 border-b-2 border-blue-600 inline-block pb-1">
            Emlak Ofisleri
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/emlak-ofisi-yonet" className="hover:text-blue-400 transition-colors">Emlak Ofisini Yönet</Link></li>
            <li><Link href="/emlak-ofisi-ac" className="hover:text-blue-400 transition-colors">Emlak Ofisi Aç</Link></li>
            <li><Link href="/neden-emlak-ofisi" className="hover:text-blue-400 transition-colors">Neden Emlak Ofisi?</Link></li>
          </ul>
        </div>

        {/* Gizlilik */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4 border-b-2 border-blue-600 inline-block pb-1">
            Gizlilik ve Kullanım
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kullanim-sartlari" className="hover:text-blue-400 transition-colors">Kullanım Şartları</Link></li>
            <li><Link href="/uyelik-sozlesmesi" className="hover:text-blue-400 transition-colors">Üyelik Sözleşmesi</Link></li>
            <li><Link href="/gizlilik-politikasi" className="hover:text-blue-400 transition-colors">Gizlilik Politikası</Link></li>
            <li><Link href="/ilan-yayinlama-kurallari" className="hover:text-blue-400 transition-colors">İlan Yayınlama Kuralları</Link></li>
            <li><Link href="/rehber" className="hover:text-blue-400 transition-colors">İşlem Rehberi</Link></li>
          </ul>
        </div>

        {/* Bize Ulaşın */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4 border-b-2 border-blue-600 inline-block pb-1">
            Bize Ulaşın
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-blue-500" />
              <a href="mailto:info@ozcinargayrimenkul.com" className="hover:text-blue-400 transition-colors">
                info@ozcinargayrimenkul.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-blue-500" />
              <a href="tel:+900000000000" className="hover:text-blue-400 transition-colors">
                0 (000) 000 00 00
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-blue-500" />
              <span>Karaman / Merkez</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Alt Telif Alanı */}
      <div className="bg-gray-950 text-gray-400 text-center py-4 text-xs border-t border-gray-800">
        <p>
          © {year} <span className="text-white font-medium">ÖZÇINAR GAYRİMENKUL</span> | 
          Tüm Hakları Saklıdır.
        </p>
        <p className="mt-1 text-[11px]">
          Bu site <Link href="https://aydinwebyazilim.com" target="_blank" className="text-blue-500 hover:underline">
            Aydın Web Yazılım®
          </Link> tarafından hazırlanmıştır.
        </p>
      </div>
    </footer>
  );
}
