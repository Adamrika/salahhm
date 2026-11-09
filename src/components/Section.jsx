import useReveal from '../hooks/useReveal';

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Section({ id, title, intro, tone = '', children }) {
  return (
    <section id={id} className={`section ${tone}`}>
      <div className="container">
        <Reveal className="sec-head">
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
