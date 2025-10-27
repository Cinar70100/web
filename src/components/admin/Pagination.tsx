import React from 'react';

export default function Pagination({
  currentPage = 1,
  totalPages = 3, // Görseldeki gibi demo veri
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center space-x-1 py-4">
      {/* Geri Butonu (Demo) */}
      <a
        href="#"
        className="rounded-md p-2 text-sm font-medium text-gray-500 hover:bg-gray-100"
      >
        &laquo;
      </a>

      {/* Sayfa Numaraları */}
      {pages.map((page) => (
        <a
          key={page}
          href="#"
          className={`rounded-md px-4 py-2 text-sm font-medium
            ${
              page === currentPage
                ? 'bg-blue-600 text-white' // Aktif Sayfa
                : 'text-gray-700 hover:bg-gray-100' // Diğer Sayfalar
            }`}
        >
          {page}
        </a>
      ))}

      {/* İleri Butonu (Demo) */}
      <a
        href="#"
        className="rounded-md p-2 text-sm font-medium text-gray-500 hover:bg-gray-100"
      >
        &raquo;
      </a>
    </nav>
  );
}