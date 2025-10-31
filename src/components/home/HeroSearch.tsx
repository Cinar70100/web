// src/components/home/HeroSearch.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CalendarDays, ChevronDown, ChevronUp, Key, MapPin, Search, Tag, Users } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Arayüz tipi
interface SearchFormData {
  listingType: 'satilik' | 'kiralik' | 'gunluk';
  mainCategory: string;
  searchText: string;
}

const HERO_SLIDES = [
  {
    image: '/images/demo/slide-placeholder-1.jpg',
    headline: 'Karaman’da doğru gayrimenkulü hızlıca bulun',
    description:
      'Yerel uzmanlıkla hazırlanan satılık ve kiralık ilan portföyümüzle size en uygun evi, ofisi ya da arsayı kolayca keşfedin.',
  },
  {
    image: '/images/demo/listing-2.jpg',
    headline: 'Yatırım potansiyeli yüksek projeleri takip edin',
    description:
      'Karaman ve çevresindeki yeni konut projelerini piyasa analizleri ve güncel fiyat bilgileriyle birlikte görüntüleyin.',
  },
  {
    image: '/images/demo/project-2.jpg',
    headline: 'Danışman desteğiyle kararınızı güçlendirin',
    description: 'Uzman ekibimizle görüntülü tur, yerinde keşif ve kredi danışmanlığı gibi ayrıcalıklara erişin.',
  },
];

const MAIN_CATEGORIES = [
  { key: 'konut', label: 'Konut' },
  { key: 'isyeri', label: 'İşyeri' },
  { key: 'arsa', label: 'Arsa' },
  { key: 'bina', label: 'Bina' },
  { key: 'devremulk', label: 'Devremülk' },
  { key: 'turistik', label: 'Turistik Tesis' },
];

const LISTING_TABS = [
  { key: 'satilik', label: 'Satılık', Icon: Tag },
  { key: 'kiralik', label: 'Kiralık', Icon: Key },
  { key: 'gunluk', label: 'Günlük Kiralık', Icon: CalendarDays },
] as const;

export default function HeroSearch() {
  const [activeListingType, setActiveListingType] = useState<'satilik' | 'kiralik' | 'gunluk'>('satilik');
  const [isCategoryPanelOpen, setIsCategoryPanelOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shouldRotateSlides, setShouldRotateSlides] = useState(true);
  const [formData, setFormData] = useState<SearchFormData>({
    listingType: 'satilik',
    mainCategory: 'konut',
    searchText: '',
  });
  const router = useRouter();

  const categoryButtonRef = useRef<HTMLButtonElement>(null);
  const categoryPanelRef = useRef<HTMLDivElement>(null);

  const topTabBaseStyle =
    'top-tab-button inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400';

  const handleListingTypeClick = (type: 'satilik' | 'kiralik' | 'gunluk') => {
    setActiveListingType(type);
    setIsCategoryPanelOpen(true);
    setFormData(prev => ({ ...prev, listingType: type, mainCategory: prev.mainCategory || 'konut' }));
  };

  const handleMainCategorySelect = (categoryKey: string) => {
    setFormData(prev => ({ ...prev, mainCategory: categoryKey }));
    setIsCategoryPanelOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, searchText: e.target.value }));
  };

  const handleManualSlideSelect = (index: number) => {
    setCurrentSlide(index);
    setShouldRotateSlides(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchParams = new URLSearchParams({
      tip: formData.listingType,
      kategori: formData.mainCategory,
    });

    if (formData.searchText.trim()) {
      searchParams.set('q', formData.searchText.trim());
    }

    router.push(`/ilan-ara?${searchParams.toString()}`);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        categoryButtonRef.current && !categoryButtonRef.current.contains(event.target as Node) &&
        categoryPanelRef.current && !categoryPanelRef.current.contains(event.target as Node)
      ) {
        const isTopTabClick = (event.target as HTMLElement).closest('.top-tab-button');
        if (!isTopTabClick) {
          setIsCategoryPanelOpen(false);
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setShouldRotateSlides(!mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (!shouldRotateSlides) {
      return undefined;
    }
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(slideTimer);
  }, [shouldRotateSlides]);

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsCategoryPanelOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 bg-cover bg-center transition-[background-image] duration-700"
        style={{ backgroundImage: `url('${activeSlide.image}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-slate-900/20" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6 text-white" aria-live="polite">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            Karaman Ev Bul
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {activeSlide.headline}
            </h1>
            <p className="max-w-xl text-base text-slate-200 sm:text-lg">
              {activeSlide.description}
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
              <Tag size={20} className="mt-0.5 text-blue-300" aria-hidden="true" />
              <div>
                <dt className="text-slate-300">2.400+ canlı ilan</dt>
                <dd className="text-slate-400">Her gün güncellenen konut, arsa ve iş yeri portföyü.</dd>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
              <Users size={20} className="mt-0.5 text-blue-300" aria-hidden="true" />
              <div>
                <dt className="text-slate-300">Uzman danışman ekibi</dt>
                <dd className="text-slate-400">Tüm süreçlerde yanınızda olan yerel uzmanlar.</dd>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
              <MapPin size={20} className="mt-0.5 text-blue-300" aria-hidden="true" />
              <div>
                <dt className="text-slate-300">Mahalle bazlı arama</dt>
                <dd className="text-slate-400">Konum, ilan numarası ya da ofis adına göre filtreleyin.</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="flex-1">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl backdrop-blur">
            <div className="flex justify-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm font-medium text-white">
              {LISTING_TABS.map(tab => (
                <button
                  key={tab.key}
                  type="button"
                  className={`${topTabBaseStyle} ${
                    activeListingType === tab.key
                      ? 'bg-white text-slate-900 shadow'
                      : 'text-slate-200 hover:bg-white/10'
                  }`}
                  onClick={() => handleListingTypeClick(tab.key)}
                  aria-pressed={activeListingType === tab.key}
                >
                  <tab.Icon size={16} aria-hidden="true" />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative mt-6">
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="relative sm:w-48">
                    <button
                      ref={categoryButtonRef}
                      type="button"
                      onClick={() => setIsCategoryPanelOpen(!isCategoryPanelOpen)}
                      className="flex w-full items-center justify-between gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-left text-sm text-white transition hover:border-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                      aria-haspopup="listbox"
                      aria-expanded={isCategoryPanelOpen}
                      aria-controls="hero-category-list"
                    >
                      <span className="truncate">
                        {formData.mainCategory
                          ? MAIN_CATEGORIES.find(c => c.key === formData.mainCategory)?.label
                          : 'Kategori Seçin'}
                      </span>
                      {isCategoryPanelOpen ? (
                        <ChevronUp size={16} className="text-slate-400" aria-hidden="true" />
                      ) : (
                        <ChevronDown size={16} className="text-slate-400" aria-hidden="true" />
                      )}
                    </button>
                    {isCategoryPanelOpen && (
                      <div
                        ref={categoryPanelRef}
                        id="hero-category-list"
                        role="listbox"
                        className="absolute z-20 mt-2 max-h-60 w-full overflow-y-auto rounded-lg border border-slate-700 bg-slate-900/95 shadow-xl"
                      >
                        {MAIN_CATEGORIES.map(cat => (
                          <button
                            key={cat.key}
                            type="button"
                            role="option"
                            aria-selected={formData.mainCategory === cat.key}
                            onClick={() => handleMainCategorySelect(cat.key)}
                            className={`flex w-full items-center justify-between px-4 py-2 text-sm transition hover:bg-blue-500/10 focus:outline-none focus-visible:bg-blue-500/20 ${
                              formData.mainCategory === cat.key
                                ? 'text-blue-300'
                                : 'text-slate-200'
                            }`}
                          >
                            {cat.label}
                            {formData.mainCategory === cat.key && (
                              <span className="text-xs uppercase tracking-widest text-blue-300">Seçili</span>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <label className="sr-only" htmlFor="hero-search-input">
                    Arama metni
                  </label>
                  <div className="relative flex-1">
                    <input
                      id="hero-search-input"
                      type="text"
                      name="searchText"
                      value={formData.searchText}
                      onChange={handleChange}
                      placeholder="Konum, ilan no ya da firma adı ile arayın"
                      className="h-full w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <Search size={18} aria-hidden="true" />
                  Aramayı Başlat
                </button>
              </form>

              <div
                className="pointer-events-none absolute -left-12 -top-12 hidden h-24 w-24 rounded-full border border-white/10 lg:block"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-8 -bottom-10 hidden h-32 w-32 rounded-full border border-white/10 lg:block"
                aria-hidden="true"
              />
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    className={`h-2 w-8 rounded-full transition ${
                      currentSlide === index ? 'bg-blue-400' : 'bg-white/20 hover:bg-white/40'
                    }`}
                    onClick={() => handleManualSlideSelect(index)}
                    aria-label={`${slide.headline} görselini göster`}
                    aria-pressed={currentSlide === index}
                  />
                ))}
              </div>
              <span>
                Aradığınızı bulamıyor musunuz?{' '}
                <Link
                  href="/iletisim"
                  className="text-blue-300 underline decoration-dotted underline-offset-2 hover:text-blue-200"
                >
                  Danışmanla görüşün
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
