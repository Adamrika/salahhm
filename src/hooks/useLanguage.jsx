import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ui } from '../data/translations';

const KEY = 'site-language';
const Ctx = createContext(null);

const initial = () => {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'ar' || saved === 'fr') return saved;
  } catch { /* storage unavailable */ }
  return 'ar';
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initial);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try { localStorage.setItem(KEY, lang); } catch { /* ignore */ }
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    toggle: () => setLang((l) => (l === 'ar' ? 'fr' : 'ar')),
    t: (key) => ui[lang][key] ?? key,
    // pick({ar, fr}) -> text in the current language
    pick: (v) => (v && typeof v === 'object' && !Array.isArray(v) && 'ar' in v ? v[lang] : v),
  }), [lang]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
