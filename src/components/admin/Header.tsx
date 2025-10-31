"use client";

import {
  Bell,
  ChevronDown,
  HelpCircle,
  Menu,
  MessageCircle,
  Plus,
  Search,
} from "lucide-react";

interface HeaderProps {
  onToggleSidebar: () => void;
}

const navLinks = [
  "Dashboard",
  "Skins",
  "Layouts",
  "Apps",
  "Components",
  "Pages",
  "Gallery",
  "Docs",
];

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 lg:gap-6">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-gray-100 lg:hidden"
            aria-label="Menüyü aç"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 md:hidden">
            <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
              Start
            </span>
            <span className="tracking-tight">UI</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xl font-semibold text-gray-800">
            <span className="rounded bg-blue-600 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
              Start
            </span>
            <span className="tracking-tight">UI</span>
          </div>

          <nav className="hidden lg:flex items-center gap-4 text-sm font-medium text-gray-600">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-full px-3 py-2 transition hover:bg-gray-100 hover:text-gray-900"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <label className="relative block">
              <span className="sr-only">Ara</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search"
                className="h-10 w-48 rounded-full border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
              />
            </label>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>

          <div className="hidden sm:flex items-center gap-2">
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-100">
              <Bell className="h-4 w-4" />
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-100">
              <MessageCircle className="h-4 w-4" />
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-100">
              <HelpCircle className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1 text-left shadow-sm">
            <div className="hidden sm:block text-xs font-semibold uppercase tracking-wide text-gray-500">
              Tim Collins
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-semibold text-white">
              TC
            </div>
            <ChevronDown className="hidden sm:block h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}