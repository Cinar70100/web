'use client';

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { navigationData } from '@/lib/admin-nav-data';
import SidebarMenuItem from './SidebarMenuItem';

interface SidebarProps {
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export default function Sidebar({ isMobileOpen, onMobileClose }: SidebarProps) {
  const containerBaseClass =
    'flex h-full flex-col bg-[#343a40] text-white shadow-xl';

  const brand = (
    <Link
      href="/dashboard"
      className="flex items-center gap-2 text-lg font-semibold tracking-wide"
    >
      <span className="rounded bg-blue-500 px-2 py-1 text-xs font-bold uppercase tracking-widest">
        Start
      </span>
      <span className="text-white">UI</span>
    </Link>
  );

  const menu = (
    <nav className="flex-1 overflow-y-auto px-4 py-6">
      <ul className="space-y-2 text-sm">
        {navigationData.map((item) => (
          <SidebarMenuItem key={item.title} item={item} />
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Masaüstü Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:bg-[#343a40]">
        <div className={containerBaseClass}>
          <div className="flex h-16 items-center justify-center border-b border-white/10 px-6">
            {brand}
          </div>
          {menu}
        </div>
      </aside>

      {/* Mobil Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onMobileClose}
        aria-hidden="true"
      />

      {/* Mobil Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 lg:hidden ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className={containerBaseClass}>
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
            {brand}
            <button
              type="button"
              onClick={onMobileClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
              aria-label="Menüyü kapat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          {menu}
        </div>
      </aside>
    </>
  );
}