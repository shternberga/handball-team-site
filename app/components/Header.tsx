'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('LAT');

  const languages = ['LAT', 'RUS', 'ENG'];

  const switchLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  return (
    <header className="bg-gray-800 text-white shadow-2xl border-b border-pink-500/20">
      <div className="container mx-auto px-4">
        {/* Верхняя строка с настройками - увеличенная */}
        <div className="hidden md:flex justify-between items-center py-4 border-b border-gray-800 bg-gray-800">
          {/* Левая сторона - пустое пространство */}
          <div></div>
          
          {/* Правая сторона - настройки и языки */}
          <div className="flex items-center space-x-8 text-base">
            <button className="text-white hover:text-pink-400 transition-colors duration-300 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="font-bold tracking-wider">MEKLĒT</span>
            </button>
            
            <button className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-bold tracking-wider">IESTATĪJUMI</span>
            </button>
            
            <div className="border-l border-gray-600 pl-6">
              <div className="flex items-center space-x-3">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => switchLanguage(lang)}
                    className={`px-3 py-2 rounded font-bold tracking-wider transition-colors duration-300 ${
                      currentLanguage === lang 
                        ? 'text-pink-400 bg-pink-500/20' 
                        : 'text-white hover:text-pink-400'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Основная навигация */}
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Логотип и название в стиле Rīnūži */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-4 group">
            <div className="text-center">
              <div className="text-xs md:text-base text-pink-400 mb-1 md:mb-2 tracking-wider">THIS IS</div>
              <div className="text-2xl md:text-5xl font-black neon-text tracking-wider">RĪNŪŽI</div>
              <div className="text-xs md:text-base text-pink-400 mt-1 md:mt-2 tracking-wider">EST. 1990</div>
              <div className="text-sm md:text-xl text-pink-300 tracking-widest">HANDBOLS</div>
            </div>
          </Link>

          {/* Навигация для десктопа в винтажном стиле */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8 flex-1 justify-center">
            {[
              { href: '/', label: 'SĀKUMS' },
              { href: '/news', label: 'ZIŅAS' },
              { href: '/games', label: 'KALENDĀRS' },
              { href: '/results', label: 'REZULTĀTI' },
              { href: '/team', label: 'KOMANDA' },
              { href: '/coaches', label: 'TRENERI' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 xl:px-6 py-3 xl:py-4 text-base xl:text-xl font-bold tracking-wider transition-all duration-300 hover:text-pink-400 hover:bg-pink-500/10 rounded"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Мобильное меню */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Мобильный переключатель языков */}
            <div className="md:hidden flex items-center space-x-1">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => switchLanguage(lang)}
                  className={`px-2 py-1 rounded text-xs font-bold tracking-wider transition-colors duration-300 ${
                    currentLanguage === lang 
                      ? 'text-pink-400 bg-pink-500/20' 
                      : 'text-white hover:text-pink-400'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <button className="text-white hover:text-pink-400 transition-colors duration-300 p-2 md:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button
              className="p-2 rounded-lg vintage-glass transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 vintage-glass-dark rounded-xl mt-4 p-4">
            <div className="flex flex-col space-y-3">
              {[
                { href: '/', label: 'SĀKUMS' },
                { href: '/news', label: 'ZIŅAS' },
                { href: '/games', label: 'KALENDĀRS' },
                { href: '/results', label: 'REZULTĀTI' },
                { href: '/team', label: 'KOMANDA' },
                { href: '/coaches', label: 'TRENERI' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 px-4 rounded-lg transition-all duration-300 hover:bg-pink-500/20 hover:text-pink-400 text-lg font-bold tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}