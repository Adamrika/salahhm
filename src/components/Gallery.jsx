import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useLang } from '../hooks/useLanguage';
import { asset } from '../utils/asset';

export default function Gallery({ items }) {
  const { t, pick } = useLang();
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <>
      <div className="gallery">
        {items.map((it, i) => (
          <button type="button" key={it.src} className="shot" onClick={() => setActive(i)}
            aria-label={`${t('open')}: ${pick(it.caption)}`}>
            <img src={asset(it.src)} alt={pick(it.caption)} loading="lazy" />
            <span>{pick(it.caption)}</span>
          </button>
        ))}
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button type="button" className="lb-close" aria-label={t('close')}><X size={26} /></button>
          <img src={asset(items[active].src)} alt={pick(items[active].caption)} />
        </div>
      )}
    </>
  );
}
