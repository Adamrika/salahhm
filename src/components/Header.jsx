import { useEffect, useState } from 'react';
import { ChevronDown, Languages, Menu, X } from 'lucide-react';
import { useLang } from '../hooks/useLanguage';
import { candidate } from '../data/candidate';

const GROUPS = [
  { id: 'home' },
  { key: 'gCandidate', children: ['bio', 'party'] },
  { key: 'gCommune', children: ['municipality', 'wilaya', 'gallery', 'residence'] },
  { key: 'gProgram', children: ['program', 'projects', 'commitments'] },
  { id: 'guide' },
  { id: 'contact' },
];

export default function Header() {
  const { t, toggle, pick } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The residence link only exists once the candidate approved it.
  const visible = (id) =>
    (id !== 'residence' || candidate.residence?.approved) &&
    (id !== 'wilaya' || candidate.wilaya) &&
    (id !== 'gallery' || candidate.gallery?.length);
  const link = (id) => (
    <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{t(`nav_${id}`)}</a>
  );

  return (
    <header className={`header ${scrolled ? 'solid' : ''}`}>
      <div className="container bar">
        <a href="#home" className="brand">{pick(candidate.name)}</a>

        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Navigation">
          {GROUPS.map((g) => {
            const kids = g.children?.filter(visible) ?? [];
            if (g.id) return link(g.id);
            if (kids.length === 1) return link(kids[0]);
            return (
              <div className="drop" key={g.key}>
                <button type="button" className="drop-btn" aria-haspopup="true">
                  {t(`nav_${g.key}`)} <ChevronDown size={14} />
                </button>
                <div className="drop-menu">{kids.map(link)}</div>
              </div>
            );
          })}
        </nav>

        <div className="tools">
          <button type="button" className="lang-btn" onClick={toggle} aria-label={t('switchLabel')}>
            <Languages size={16} /> {t('switchTo')}
          </button>
          <button type="button" className="burger" onClick={() => setOpen((o) => !o)}
            aria-label={open ? t('close') : t('menu')} aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
