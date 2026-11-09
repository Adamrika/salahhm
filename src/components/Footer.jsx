import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useLang } from '../hooks/useLanguage';
import { candidate } from '../data/candidate';

export default function Footer() {
  const { t, pick } = useLang();
  const { social } = candidate;
  return (
    <footer className="footer">
      <div className="container foot">
        <div>
          <strong>{pick(candidate.name)}</strong>
          <p>{pick(candidate.municipality.name)}{candidate.wilaya ? ` — ${pick(candidate.wilaya.name)}` : ''}</p>
        </div>
        <div className="social">
          {social.facebook && <a href={social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={20} /></a>}
          {social.instagram && <a href={social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={20} /></a>}
          {social.youtube && <a href={social.youtube} aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube size={20} /></a>}
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} — {t('rights')}</p>
    </footer>
  );
}
