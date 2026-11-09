import {
  Briefcase, Building2, Bus, ExternalLink, GraduationCap, HeartPulse, Leaf, Mail, MapPin, Phone, Users,
} from 'lucide-react';
import { useLang } from '../hooks/useLanguage';
import { asset } from '../utils/asset';
import Section, { Reveal } from '../components/Section';
import FlagBackground from '../components/FlagBackground';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import { candidate as c } from '../data/candidate';
import { program, commitments } from '../data/program';
import { projects } from '../data/projects';

const ICONS = { GraduationCap, HeartPulse, Leaf, Bus, Users, Building2 };

function Timeline({ title, icon: Icon, rows }) {
  const { pick } = useLang();
  return (
    <div className="timeline">
      <h3><Icon size={18} /> {title}</h3>
      <ul>
        {rows.map((r) => (
          <li key={pick(r.title)}>
            {r.period && <time>{r.period}</time>}
            <strong>{pick(r.title)}</strong>
            {r.place && <span>{pick(r.place)}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stats({ list }) {
  const { pick } = useLang();
  return (
    <dl className="stats">
      {list.map((s) => (
        <div key={pick(s.label)}><dt>{pick(s.label)}</dt><dd>{s.value}</dd></div>
      ))}
    </dl>
  );
}

export default function Home() {
  const { t, pick } = useLang();

  return (
    <main>
      {/* 1. Homepage */}
      <section id="home" className="hero">
        <FlagBackground />
        <div className="hero-shade" />
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="kicker">{t('heroKicker')}</p>
            <h1>{pick(c.name)}</h1>
            <p className="tagline">{pick(c.tagline)}</p>
            <div className="numbers">
              <div><span>{t('listNumber')}</span><b>{c.listNumber}</b></div>
              <div><span>{t('candidateNumber')}</span><b>{c.candidateNumber}</b></div>
            </div>
            <div className="cta">
              <a className="btn primary" href="#program">{t('ctaProgram')}</a>
              <a className="btn ghost" href="#contact">{t('ctaContact')}</a>
            </div>
                      </div>
          <div className="portrait"><img src={asset(c.photo)} alt={pick(c.name)} /></div>
        </div>
      </section>

      {/* 2. Biography */}
      <Section id="bio" title={t('bioTitle')} intro={t('bioIntro')}>
        <div className="split">
          <Reveal className="prose">
            {pick(c.biography).map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <Reveal className="two-col" delay={80}>
            <Timeline title={t('education')} icon={GraduationCap} rows={c.education} />
            <Timeline title={t('experience')} icon={Briefcase} rows={c.experience} />
          </Reveal>
        </div>
      </Section>


      {/* 4. Party */}
      <Section id="party" title={t('partyTitle')} intro={t('partyIntro')}>
        <Reveal className="party">
          <img src={asset(c.party.logo)} alt={pick(c.party.name)} />
          <div>
            <h3>{pick(c.party.name)}</h3>
            <p>{pick(c.party.description)}</p>
            <p className="chips"><b>{t('partyValues')}:</b> {c.party.values.map((v) => <span key={pick(v)}>{pick(v)}</span>)}</p>
            {c.party.website && c.party.website !== '#' && (
              <a className="link" href={c.party.website} target="_blank" rel="noreferrer">{t('partySite')} <ExternalLink size={14} /></a>
            )}
          </div>
        </Reveal>
      </Section>

      {/* 5. Municipality */}
      <Section id="municipality" title={`${t('munTitle')} — ${pick(c.municipality.name)}`} intro={t('munIntro')}>
        <div className="split">
          <Reveal><img className="wide" src={asset(c.municipality.photo)} alt={pick(c.municipality.name)} loading="lazy" /></Reveal>
          <Reveal delay={80}>
            <p className="lead">{pick(c.municipality.description)}</p>
            <Stats list={c.municipality.stats} />
          </Reveal>
        </div>
      </Section>

      {/* 6. Wilaya */}
      {c.wilaya && (
      <Section id="wilaya" title={`${t('wilTitle')} — ${pick(c.wilaya.name)}`} intro={t('wilIntro')}>
        <Reveal>
          <p className="lead narrow">{pick(c.wilaya.description)}</p>
          <Stats list={c.wilaya.stats} />
        </Reveal>
      </Section>
      )}

      {/* 7. Gallery */}
      {c.gallery?.length > 0 && (
      <Section id="gallery" title={t('galTitle')} intro={t('galIntro')}>
        <Gallery items={c.gallery} />
      </Section>
      )}

      {/* 8. Residence — only rendered when explicitly approved in candidate.js */}
      {c.residence?.approved && (
        <Section id="residence" title={t('resTitle')} intro={t('resIntro')}>
          <Reveal className="info-row"><MapPin size={20} /> <span>{pick(c.residence.address)}</span></Reveal>
        </Section>
      )}

      {/* 9. Program — FUTURE proposals */}
      <Section id="program" title={t('progTitle')} intro={t('progIntro')}>
        <div className="cards axes">
          {program.map((ax, i) => {
            const Icon = ICONS[ax.icon] || Users;
            return (
              <Reveal key={ax.id} delay={i * 60}>
                <article className="axis">
                  <span className="badge future">{t('badgeFuture')}</span>
                  <h3><Icon size={20} /> {pick(ax.title)}</h3>
                  <ul>{pick(ax.items).map((it) => <li key={it}>{it}</li>)}</ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 10. Proposed projects */}
      <Section id="projects" title={t('projTitle')} intro={t('projIntro')}>
        <div className="cards">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <article className="card">
                <img src={asset(p.image)} alt={pick(p.title)} loading="lazy" />
                <div className="card-body">
                  <span className="badge future">{t('badgeFuture')}</span>
                  <h3>{pick(p.title)}</h3>
                  <p>{pick(p.description)}</p>
                  <p className="small"><b>{t('timeline')}:</b> {pick(p.timeline)}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 11. Commitment tracking */}
      <Section id="commitments" title={t('comTitle')} intro={t('comIntro')}>
        <ul className="tracker">
          {commitments.map((m) => (
            <Reveal key={m.id}>
              <li>
                <div className="tr-top"><strong>{pick(m.title)}</strong><span className={`status ${m.status}`}>{t(m.status)}</span></div>
                <div className="meter" role="progressbar" aria-valuenow={m.progress} aria-valuemin="0" aria-valuemax="100">
                  <i style={{ width: `${m.progress}%` }} />
                </div>
                <small>{m.progress}%</small>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 12. Educational voting guide */}
      <Section id="guide" title={t('guideTitle')} intro={t('guideIntro')}>
        <div className="guide">
          <Reveal className="g-card"><span className="g-num">{c.listNumber}</span><h3>{t('guideListTitle')}</h3><p>{t('guideListText')}</p></Reveal>
          <Reveal className="g-card" delay={80}><span className="g-num alt">{c.candidateNumber}</span><h3>{t('guideCandTitle')}</h3><p>{t('guideCandText')}</p></Reveal>
        </div>
        <Reveal className="g-diff"><h3>{t('guideDiff')}</h3><p>{t('guideDiffText')}</p></Reveal>
        <p className="g-note">{t('guideNote')}</p>
      </Section>

      {/* 13. Citizen communication */}
      <Section id="contact" title={t('contactTitle')} intro={t('contactIntro')}>
        <div className="split">
          <Reveal className="contact-list">
            <p><Mail size={18} /> <a href={`mailto:${c.contact.email}`}>{c.contact.email}</a></p>
            {c.contact.phone && <p><Phone size={18} /> <a href={`tel:${c.contact.phone.replace(/\s/g, '')}`} dir="ltr">{c.contact.phone}</a></p>}
            <p><MapPin size={18} /> {pick(c.contact.office)}</p>
          </Reveal>
          <Reveal delay={80}><ContactForm /></Reveal>
        </div>
      </Section>
    </main>
  );
}
