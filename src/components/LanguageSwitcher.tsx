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
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        {/* Language Options */}
        {isOpen && (
          <div className="absolute bottom-full mb-2 left-0 min-w-[180px]">
            <div className="glass border border-aqua-500/30 rounded-2xl overflow-hidden animate-fade-in-up">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 flex items-center gap-3 transition-all duration-300 hover:bg-white/10 ${
                    language === lang.code 
                      ? 'bg-gradient-to-r from-aqua-500/20 to-teal-500/20 text-aqua-400' 
                      : 'text-white/80 hover:text-aqua-400'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                  {language === lang.code && (
                    <div className="ml-auto w-2 h-2 bg-aqua-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group glass p-4 rounded-2xl border border-aqua-500/30 hover:border-aqua-500/50 transition-all duration-300 hover-float min-w-[64px]"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <Globe 
                size={20} 
                className={`text-aqua-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-aqua-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-[8px] text-white font-bold">{currentLang.flag}</span>
              </div>
            </div>
            
            {/* Language indicator */}
            <div className="hidden sm:block">
              <div className="text-aqua-400 text-sm font-bold">
                {currentLang.code.toUpperCase()}
              </div>
            </div>
          </div>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-aqua-500 via-teal-500 to-aqua-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
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
