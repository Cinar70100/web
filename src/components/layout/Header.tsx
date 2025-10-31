// src/components/layout/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Mail,
  Menu,
  Phone,
  Search,
  X,
  Youtube,
} from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/satilik', label: 'Satılık' },
  { href: '/kiralik', label: 'Kiralık' },
  { href: '/gunluk-kiralik', label: 'Günlük Kiralık' },
  { href: '/projeler', label: 'Projeler' },
  { href: '/emlak-ofisleri', label: 'Emlak Ofisleri' },
  { href: '/haberler', label: 'Haberler' },
];

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/karamanevbul', icon: Facebook, label: 'Facebook' },
  { href: 'https://www.youtube.com/@karamanevbul', icon: Youtube, label: 'YouTube' },
  { href: 'https://www.instagram.com/karamanevbul', icon: Instagram, label: 'Instagram' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white/95 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="border-b bg-slate-900 text-xs text-slate-100">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2">
          <div className="flex flex-wrap items-center gap-3">
            <nav aria-label="Karaman Ev Bul sosyal bağlantıları" className="flex items-center gap-2">
              {SOCIAL_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:border-white/40 hover:bg-white/20"
                  aria-label={item.label}
                >
                  <item.icon size={14} />
                </Link>
              ))}
            </nav>
            <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
            <a
              href="tel:+903382030707"
              className="hidden items-center gap-1 text-slate-200 transition hover:text-white sm:flex"
            >
              <Phone size={14} aria-hidden="true" />
              0 (338) 203 07 07
            </a>
            <a
              href="mailto:info@karamanevbul.com"
              className="hidden items-center gap-1 text-slate-200 transition hover:text-white sm:flex"
            >
              <Mail size={14} aria-hidden="true" />
              info@karamanevbul.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <label className="sr-only" htmlFor="language-select">
              Dil seçin
            </label>
            <select
              id="language-select"
              className="rounded border border-white/10 bg-white/10 px-2 py-1 text-[11px] uppercase tracking-widest text-slate-100 transition focus:border-white/30 focus:outline-none"
            >
              <option value="tr">TR</option>
              <option value="en">EN</option>
            </select>
            <div className="hidden items-center gap-3 text-slate-200 sm:flex">
              <Link href="/giris" className="transition hover:text-white">
                Giriş Yap
              </Link>
              <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
              <Link href="/kayit" className="transition hover:text-white">
                Kayıt Ol
              </Link>
            </div>
            <Link
              href="/ilan-ver"
              className="inline-flex items-center rounded-full bg-blue-500 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-blue-400"
            >
              Ücretsiz İlan Ver
            </Link>
          </div>
        </div>
      </div>

      <nav className="border-b border-slate-100">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center" aria-label="Karaman Ev Bul ana sayfası">
            <Image
              src="/logo-site.png"
              alt="Karaman Ev Bul"
              width={200}
              height={45}
              priority
              className="h-11 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/ilan-ara"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
            >
              <Search size={16} aria-hidden="true" />
              Detaylı Ara
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-blue-200 hover:text-blue-600 lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Menüyü aç"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="ml-auto flex h-full w-72 flex-col gap-4 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Menü
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
                aria-label="Menüyü kapat"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/ilan-ara"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Search size={16} aria-hidden="true" />
                Detaylı Ara
              </Link>
              <Link
                href="/ilan-ver"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ücretsiz İlan Ver
              </Link>
            </nav>
            <div className="mt-auto space-y-1 text-xs text-slate-500">
              <p className="font-semibold uppercase tracking-widest text-slate-400">İletişim</p>
              <a href="tel:+903382030707" className="flex items-center gap-2 text-slate-600 transition hover:text-blue-600">
                <Phone size={14} aria-hidden="true" /> 0 (338) 203 07 07
              </a>
              <a href="mailto:info@karamanevbul.com" className="flex items-center gap-2 text-slate-600 transition hover:text-blue-600">
                <Mail size={14} aria-hidden="true" /> info@karamanevbul.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}