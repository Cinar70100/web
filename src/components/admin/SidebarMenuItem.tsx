'use client'; // Bu bileşen state (açık/kapalı) tutar

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Aktif linki bulmak için
import type { NavItem } from '@/lib/admin-nav-data';

interface SidebarMenuItemProps {
  item: NavItem;
}

export default function SidebarMenuItem({ item }: SidebarMenuItemProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Bu menü veya alt menülerinden biri aktif mi?
  const isActive = pathname === item.href || (item.children && item.children.some(child => pathname === child.href));
  
  // Alt menüsü var mı? (Akordiyon)
  if (item.children) {
    return (
      <li className={`${isActive ? 'bg-gray-700' : ''} rounded-lg`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between p-3 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg"
        >
          <span className="flex items-center">
            {/* İkon Placeholder */}
            {/* <span className="mr-3">ICON</span> */}
            {item.title}
          </span>
          {/* Aç/Kapa Oku (Chevron) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Alt Menü (Açıkken) */}
        {isOpen && (
          <ul className="mt-1 space-y-1 pl-6">
            {item.children.map((child) => (
              <li key={child.title}>
                <Link
                  href={child.href}
                  className={`block rounded-lg p-2.5 text-xs font-medium ${
                    pathname === child.href
                      ? 'text-white bg-gray-600' // Aktif alt link
                      : 'text-gray-400 hover:text-white hover:bg-gray-700' // Pasif alt link
                  }`}
                >
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  // Alt menüsü yok (Normal Link)
  return (
    <li>
      <Link
        href={item.href}
        className={`block rounded-lg p-3 text-sm font-medium ${
          isActive
            ? 'text-white bg-gray-700' // Aktif ana link
            : 'text-gray-300 hover:bg-gray-700 hover:text-white' // Pasif ana link
        }`}
      >
        {/* <span className="mr-3">ICON</span> */}
        {item.title}
      </Link>
    </li>
  );
}