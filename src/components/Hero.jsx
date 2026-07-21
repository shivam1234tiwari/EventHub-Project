const tickerItems = [
  'SUNSET ROOFTOP SESSIONS · JUL 26',
  'INDIE MAKERS MEETUP · JUL 29',
  'CITY JAZZ NIGHT · AUG 02',
  'STARTUP PITCH DAY · AUG 06',
  'FOOD TRUCK FESTIVAL · AUG 09',
  'WATERCOLOR WORKSHOP · AUG 12',
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow">Live in your city, tonight and beyond</p>
        <h1 className="hero__title">
          Every event <br /> worth <span>showing up</span> for.
        </h1>
        <p className="hero__sub">
          EventHub is the board where organizers put it up and people find it —
          concerts, meetups, workshops, markets. One place, no scrolling five apps deep.
        </p>

        <form className="hero__search" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search events, venues, or cities" aria-label="Search events" />
          <button type="submit">Find events</button>
        </form>

        <div className="hero__stats">
          <div>
            <strong>2,400+</strong>
            <span>events listed</span>
          </div>
          <div>
            <strong>180</strong>
            <span>cities covered</span>
          </div>
          <div>
            <strong>60k</strong>
            <span>tickets booked</span>
          </div>
        </div>
      </div>

      <div className="marquee" role="marquee" aria-label="Upcoming events ticker">
        <div className="marquee__track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span className="marquee__item" key={i}>
              <i className="marquee__bulb" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          padding-top: 88px;
          background:
            radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,184,77,0.10), transparent 60%),
            var(--ink);
        }
        .hero__glow {
          position: absolute;
          top: -220px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 500px;
          background: radial-gradient(circle, rgba(232,72,60,0.18), transparent 70%);
          filter: blur(10px);
          pointer-events: none;
        }
        .hero__inner {
          position: relative;
          text-align: center;
          padding-bottom: 64px;
        }
        .hero__title {
          margin-top: 20px;
          font-size: clamp(42px, 7vw, 84px);
          line-height: 0.98;
          color: var(--paper);
          text-transform: uppercase;
        }
        .hero__title span {
          color: var(--marquee);
          font-style: italic;
        }
        .hero__sub {
          max-width: 560px;
          margin: 26px auto 0;
          font-size: 17px;
          line-height: 1.6;
          color: var(--slate);
        }
        .hero__search {
          display: flex;
          max-width: 560px;
          margin: 36px auto 0;
          background: var(--ink-soft);
          border: 1px solid var(--line-dark);
          border-radius: 999px;
          padding: 6px 6px 6px 22px;
        }
        .hero__search input {
          flex: 1;
          background: none;
          border: none;
          color: var(--paper);
          font-family: var(--font-body);
          font-size: 15px;
          outline: none;
        }
        .hero__search input::placeholder {
          color: var(--slate-dark);
        }
        .hero__search button {
          background: var(--ticket);
          color: var(--white);
          border: none;
          border-radius: 999px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .hero__search button:hover {
          background: #cf392e;
          transform: translateY(-1px);
        }
        .hero__stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          margin-top: 56px;
        }
        .hero__stats div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .hero__stats strong {
          font-family: var(--font-display);
          font-size: 28px;
          color: var(--paper);
        }
        .hero__stats span {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--slate);
        }

        .marquee {
          position: relative;
          border-top: 1px solid var(--line-dark);
          border-bottom: 1px solid var(--line-dark);
          background: var(--ink-soft);
          overflow: hidden;
          padding: 14px 0;
        }
        .marquee__track {
          display: flex;
          width: max-content;
          animation: scroll-left 32s linear infinite;
        }
        .marquee__item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 13px;
          letter-spacing: 0.06em;
          color: var(--slate);
          white-space: nowrap;
          padding: 0 28px;
          border-right: 1px solid var(--line-dark);
        }
        .marquee__bulb {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--marquee);
          box-shadow: 0 0 8px 1px rgba(255,184,77,0.7);
          flex-shrink: 0;
        }
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 640px) {
          .hero__stats { gap: 28px; }
          .hero__search { flex-direction: column; border-radius: 20px; padding: 14px; gap: 10px; }
          .hero__search input { padding: 6px 4px; }
          .hero__search button { width: 100%; }
        }
      `}</style>
    </section>
  )
}
