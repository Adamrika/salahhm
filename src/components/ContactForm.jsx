import { useState } from 'react';
import { Send } from 'lucide-react';
import { useLang } from '../hooks/useLanguage';
import { candidate } from '../data/candidate';

// Static hosting has no server, so the form opens the visitor's e-mail app (mailto:).
export default function ContactForm() {
  const { t } = useLang();
  const [f, setF] = useState({ name: '', subject: '', message: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const body = `${f.message}\n\n— ${f.name}`;
    window.location.href =
      `mailto:${candidate.contact.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="form" onSubmit={submit}>
      <label>{t('fName')}<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
      <label>{t('fSubject')}<input required value={f.subject} onChange={set('subject')} /></label>
      <label>{t('fMessage')}<textarea required rows="5" value={f.message} onChange={set('message')} /></label>
      <button type="submit" className="btn primary"><Send size={16} /> {t('fSend')}</button>
      <p className="small">{t('fHint')}</p>
    </form>
  );
}
