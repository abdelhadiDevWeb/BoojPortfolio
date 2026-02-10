'use client';

import { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Language Options */}
        {isOpen && (
          <div className="absolute bottom-full mb-3 right-0 min-w-[200px]">
            <div className="glass border border-aqua-500/40 rounded-2xl overflow-hidden shadow-2xl shadow-aqua-500/20 backdrop-blur-xl">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full px-5 py-3.5 flex items-center gap-3 transition-all duration-300 hover:bg-white/10 ${
                    language === lang.code 
                      ? 'bg-gradient-to-r from-aqua-500/30 to-teal-500/30 text-aqua-400 font-semibold' 
                      : 'text-white/80 hover:text-aqua-400'
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="font-medium text-sm">{lang.name}</span>
                  {language === lang.code && (
                    <div className="ml-auto w-2 h-2 bg-aqua-400 rounded-full animate-pulse shadow-lg shadow-aqua-400/50"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Modern Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative glass p-3.5 rounded-xl border border-aqua-500/40 hover:border-aqua-500/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-aqua-500/30 backdrop-blur-md"
        >
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <Globe 
                size={22} 
                className={`text-aqua-400 transition-all duration-300 ${isOpen ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`} 
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-aqua-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-aqua-500/50 border border-aqua-400/50">
                <span className="text-[10px]">{currentLang.flag}</span>
              </div>
            </div>
            
            {/* Language indicator */}
            <div className="hidden sm:block">
              <div className="text-aqua-400 text-sm font-bold bg-aqua-500/10 px-2.5 py-1 rounded-lg">
                {currentLang.code.toUpperCase()}
              </div>
            </div>
          </div>

          {/* Animated gradient border on hover */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-aqua-500 via-teal-500 to-aqua-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 blur-sm"></div>
        </button>

        {/* Close overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 -z-10" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
