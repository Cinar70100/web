'use client'; // Bu bileşen 'SidebarMenuItem'i kullandığı için

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navigationData } from '@/lib/admin-nav-data'; // Yeni veri yapımızı import ediyoruz
import SidebarMenuItem from './SidebarMenuItem'; // Yeni menü bileşenimizi import ediyoruz

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-60 bg-[#343a40] text-white flex flex-col transition-all duration-300">
      
      {/* 1. Logo Alanı (İstediğiniz gibi Image bileşeni ile) */}
      <div className="flex h-16 items-center justify-center border-b border-gray-700 px-4">
        {/* Lütfen 'public' klasörünüze 'logo-admin.png' adında bir logo ekleyin.
          Boyutları (width={180} height={40}) olarak ayarlandı.
          Bu, 180px genişlik ve 40px yükseklik (veya 9:2 oranı) önerisidir.
          'object-contain' ile logonun bozulmadan sığması sağlanır.
        */}
        <Link href="/dashboard">
          <Image
            src="/logo-admin.png" // Bu dosyayı 'public/logo-admin.png' olarak eklemelisiniz
            alt="Karaman Ev Bul Yönetim Paneli"
            width={180}
            height={40}
            className="object-contain" // Logonuzun oranını korur
            priority // Logonun hızlı yüklenmesi (LCP) için
          />
        </Link>
        {/* Eğer metin logo isterseniz (START UI gibi) bunu kullanın:
        <Link href="/dashboard" className="text-2xl font-bold">
          KARAMAN EV BUL
        </Link>
        */}
      </div>

      {/* 2. Navigasyon Alanı (Yeni Dinamik Menü) */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {navigationData.map((item) => (
            <SidebarMenuItem key={item.title} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}