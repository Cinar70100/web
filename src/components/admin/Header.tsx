export default function Header() {
  return (
    <header className="relative z-0 flex h-16 flex-shrink-0 items-center justify-between border-b bg-white px-6 shadow-sm">
      {/* Sol Taraf: Sidebar Toggle (şimdilik placeholder) */}
      <div>
        {/* Gelecekte buraya mobil için menü açma butonu gelecek */}
        <button className="text-gray-500 hover:text-gray-700">
          {/* Placeholder İkon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Sağ Taraf: İkonlar ve Kullanıcı */}
      <div className="flex items-center space-x-4">
        {/* Placeholder ikonlar (Search, Add, Flag, User) */}
        <span className="text-gray-500">Search...</span>
        
        <button className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Add +
        </button>
        
        <span className="text-gray-500">(Flag)</span>
        <span className="text-gray-500">(User)</span>
      </div>
    </header>
  );
}