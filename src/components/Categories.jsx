const categories = [
  { name: 'Music', count: 412, icon: '♪' },
  { name: 'Business', count: 268, icon: '◆' },
  { name: 'Food & Drink', count: 195, icon: '✦' },
  { name: 'Workshops', count: 331, icon: '✎' },
  { name: 'Sports', count: 174, icon: '●' },
  { name: 'Arts', count: 220, icon: '❖' },
  { name: 'Networking', count: 158, icon: '⚭' },
  { name: 'Community', count: 302, icon: '❋' },
]

export default function Categories() {
  return (
    <section className="cat" id="categories">
      <div className="container">
        <p className="eyebrow">Browse by interest</p>
        <h2 className="cat__title">Find your kind of night</h2>

        <div className="cat__grid">
          {categories.map((c) => (
            <a href="#" className="cat__card" key={c.name}>
              <span className="cat__icon">{c.icon}</span>
              <span className="cat__name">{c.name}</span>
              <span className="cat__count">{c.count} live</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .cat {
          padding: 100px 0;
          background: var(--paper);
          color: var(--ink);
        }
        .cat .eyebrow {
          color: var(--ticket);
        }
        .cat__title {
          font-size: clamp(28px, 4vw, 42px);
          text-transform: uppercase;
          margin-top: 10px;
          margin-bottom: 44px;
        }
        .cat__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .cat__card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 26px 20px;
          background: var(--white);
          border: 1px solid var(--line-light);
          border-radius: 14px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .cat__card:hover {
          transform: translateY(-3px);
          border-color: var(--marquee);
          box-shadow: 0 10px 24px rgba(18,18,43,0.08);
        }
        .cat__icon {
          font-size: 20px;
          color: var(--ticket);
        }
        .cat__name {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 16px;
        }
        .cat__count {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--slate-dark);
        }
        @media (max-width: 900px) {
          .cat__grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  )
}
