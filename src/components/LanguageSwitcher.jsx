import { useEffect } from 'react';

export function LanguageSwitcher()  {
  
  const changeLanguage = (langCode) => {
    const selectEl = document.querySelector('.goog-te-combo');
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="flex gap-4 p-2 bg-[#0C2C55]/50 backdrop-blur-md rounded-full border border-white/10">
      {/* Tombol ID */}
      <button 
        onClick={() => changeLanguage('id')}
        className="px-4 py-1 text-xs font-bold text-white hover:text-[#6BA2B0] transition-colors"
      >
        ID
      </button>

      <div className="w-[1px] h-4 bg-white/20 self-center"></div>

      {/* Tombol EN */}
      <button 
        onClick={() => changeLanguage('en')}
        className="px-4 py-1 text-xs font-bold text-white hover:text-[#6BA2B0] transition-colors"
      >
        EN
      </button>

      {/* Element Google Asli (Kita sembunyikan dengan CSS) */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </div>
  );
};
