// src/components/home/HeroSearch.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, Tag, Key, CalendarDays } from 'lucide-react'; // İkonları import et (Gereksiz olanlar kaldırıldı)

// Arayüz tipi
interface SearchFormData {
  listingType: 'satilik' | 'kiralik' | 'gunluk';
  mainCategory: string;
  searchText: string;
}

export default function HeroSearch() {
  const [activeListingType, setActiveListingType] = useState<'satilik' | 'kiralik' | 'gunluk'>('satilik');
  const [isCategoryPanelOpen, setIsCategoryPanelOpen] = useState(false);
  const [formData, setFormData] = useState<SearchFormData>({
    listingType: 'satilik',
    mainCategory: 'konut', // Varsayılan konut
    searchText: '',
  });

  const categoryButtonRef = useRef<HTMLButtonElement>(null);
  const categoryPanelRef = useRef<HTMLDivElement>(null);

  // Stil tanımlamaları
  const topTabBaseStyle = "px-5 py-3 text-sm font-medium focus:outline-none transition-colors duration-150 border-b-2 flex items-center gap-1.5 justify-center flex-grow text-center";
  const topTabActiveStyle = "text-blue-600 border-blue-600 bg-white bg-opacity-10";
  const topTabInactiveStyle = "text-white border-transparent hover:bg-white hover:bg-opacity-5";

  // Ana Kategori Listesi
  const mainCategories = [
    { key: 'konut', label: 'Konut' },
    { key: 'isyeri', label: 'İşyeri' },
    { key: 'arsa', label: 'Arsa' },
    { key: 'bina', label: 'Bina' },
    { key: 'devremulk', label: 'Devremülk' },
    { key: 'turistik', label: 'Turistik Tesis' },
  ];

  // Üst Sekme değiştiğinde
  const handleListingTypeClick = (type: 'satilik' | 'kiralik' | 'gunluk') => {
    setActiveListingType(type);
    setIsCategoryPanelOpen(true); // Sekmeye tıklayınca paneli AÇ
    setFormData(prev => ({ ...prev, listingType: type, mainCategory: prev.mainCategory || 'konut' }));
  };

  // Ana Kategori seçildiğinde
  const handleMainCategorySelect = (categoryKey: string) => {
    setFormData(prev => ({ ...prev, mainCategory: categoryKey }));
    setIsCategoryPanelOpen(false); // Kategori seçilince paneli kapat
  };

  // Input değiştiğinde
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, searchText: e.target.value }));
  };

  // Form gönderimi
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Arama verisi:", formData);
    // Arama sayfasına yönlendirme
  };

  // Dışarı tıklandığında paneli kapatma
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [categoryButtonRef, categoryPanelRef]);


  return (
    // Ana Konteyner
    <div className="relative bg-gray-700 h-[560px] flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/images/demo/slide-placeholder-1.jpg')"}}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

      {/* Arama Alanı Konteyneri */}
      <div className="relative z-10 w-full max-w-4xl px-4">
        {/* Şeffaf Arka Planlı Kutu */}
        <div className="bg-black bg-opacity-60 p-4 rounded-lg backdrop-blur-sm shadow-lg">
          {/* Üst Kategori Sekmeleri (Satılık/Kiralık/Günlük) */}
          <div className="flex justify-center border-b border-white border-opacity-20 mb-4">
            {([
                { key: 'satilik', label: 'Satılık', Icon: Tag },
                { key: 'kiralik', label: 'Kiralık', Icon: Key },
                { key: 'gunluk', label: 'Günlük Kiralık', Icon: CalendarDays }
            ] as const).map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`top-tab-button ${topTabBaseStyle} ${activeListingType === tab.key ? topTabActiveStyle : topTabInactiveStyle}`}
                onClick={() => handleListingTypeClick(tab.key)}
              >
                <tab.Icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Arama Formu ve Açılır Panel */}
          <div className="relative"> {/* Açılır panelin konumlanması için */}
            <form onSubmit={handleSubmit} className="flex items-stretch gap-0 relative z-10">

              {/* Kategori Seçim Butonu (Sabit Genişlik) */}
              <button
                ref={categoryButtonRef}
                type="button"
                onClick={() => setIsCategoryPanelOpen(!isCategoryPanelOpen)}
                // Yuvarlak köşe sadece solda, Sabit genişlik w-48
                className="px-4 py-3 bg-white border border-r-0 border-gray-300 rounded-l-md text-gray-700 hover:bg-gray-100 flex items-center justify-between w-48 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-sm truncate pr-1">
                  {formData.mainCategory
                    ? mainCategories.find(c => c.key === formData.mainCategory)?.label
                    : 'Kategori Seçin'}
                </span>
                {isCategoryPanelOpen ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
              </button>

              {/* Ana Arama Inputu (Genişliği değişmiyor) */}
              <div className="relative flex-grow">
                <input
                  type="text"
                  name="searchText"
                  value={formData.searchText}
                  onChange={handleChange}
                  placeholder="Konum, ilan no ya da firma adı ile arayın"
                  // Sadece üst ve alt kenarlık var, solda butona bitişik
                  className="w-full h-full px-4 py-3 border-t border-b border-l-0 border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-base"
                />
              </div>

              {/* Ara Butonu */}
              <button
                type="submit"
                // Yuvarlak köşe sadece sağda
                className="px-6 py-3 bg-blue-600 text-white rounded-r-md font-semibold hover:bg-blue-700 flex items-center justify-center gap-2 text-base flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Search size={18} />
                <span>ARA</span>
              </button>
            </form>

            {/* Açılır Kategori Paneli (Konumu ve stili aynı kaldı) */}
            {isCategoryPanelOpen && (
              <div
                ref={categoryPanelRef}
                className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-20 max-h-60 overflow-y-auto"
              >
                {mainCategories.map(cat => (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => handleMainCategorySelect(cat.key)}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${formData.mainCategory === cat.key ? 'text-blue-600 font-medium bg-blue-50' : 'text-gray-700'}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div> {/* Arama Formu ve Açılır Panel sonu */}
        </div> {/* Şeffaf Kutu sonu */}
      </div> {/* Arama Alanı Konteyneri sonu */}
    </div> // Ana Konteyner sonu
  );
}