const perks = [
  { label: 'List in minutes', detail: 'Publish an event page with dates, pricing, and capacity in one form.' },
  { label: 'Track every booking', detail: 'See who reserved, who checked in, and what sold out — as it happens.' },
  { label: 'Reach the right crowd', detail: 'Your event surfaces to people already browsing its category and city.' },
]

export default function OrganizerSection() {
  return (
    <section className="org" id="organizers">
      <div className="container org__inner">
        <div className="org__copy">
          <p className="eyebrow">For organizers</p>
          <h2 className="org__title">
            Put your event <br />on the board.
          </h2>
          <p className="org__sub">
            Whether it's a 12-seat workshop or a 2,000-person festival, EventHub gives
            you one dashboard to publish it, sell it, and see who's coming.
          </p>

          <ul className="org__perks">
            {perks.map((p) => (
              <li key={p.label}>
                <span className="org__perk-label">{p.label}</span>
                <span className="org__perk-detail">{p.detail}</span>
              </li>
            ))}
          </ul>

          <a href="#" className="org__cta">Start listing — it's free</a>
        </div>

        <div className="org__panel" aria-hidden="true">
          <div className="org__panel-header">
            <span>Organizer dashboard</span>
            <span className="org__panel-tag">Preview</span>
          </div>
          <div className="org__panel-row">
            <span>Sunset Rooftop Sessions</span>
            <strong>184 / 200 booked</strong>
          </div>
          <div className="org__panel-bar"><i style={{ width: '92%' }} /></div>
          <div className="org__panel-row">
            <span>Indie Makers Meetup</span>
            <strong>76 / 120 booked</strong>
          </div>
          <div className="org__panel-bar"><i style={{ width: '63%' }} /></div>
          <div className="org__panel-row">
            <span>Startup Pitch Day</span>
            <strong>41 / 150 booked</strong>
          </div>
          <div className="org__panel-bar"><i style={{ width: '27%' }} /></div>
        </div>
      </div>

      <style>{`
        .org {
          padding: 100px 0;
          background: var(--ink);
        }
        .org__inner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        .org__title {
          font-size: clamp(30px, 4vw, 46px);
          text-transform: uppercase;
          color: var(--paper);
          margin-top: 10px;
          line-height: 1.05;
        }
        .org__sub {
          margin-top: 20px;
          font-size: 16px;
          line-height: 1.6;
          color: var(--slate);
          max-width: 460px;
        }
        .org__perks {
          list-style: none;
          padding: 0;
          margin: 34px 0 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .org__perks li {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-left: 20px;
          border-left: 2px solid var(--marquee);
        }
        .org__perk-label {
          font-weight: 700;
          font-size: 15px;
          color: var(--paper);
        }
        .org__perk-detail {
          font-size: 14px;
          color: var(--slate);
          max-width: 420px;
        }
        .org__cta {
          display: inline-block;
          margin-top: 36px;
          background: var(--ticket);
          color: var(--white);
          font-weight: 600;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 999px;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .org__cta:hover {
          background: #cf392e;
          transform: translateY(-1px);
        }

        .org__panel {
          background: var(--ink-soft);
          border: 1px solid var(--line-dark);
          border-radius: 16px;
          padding: 28px;
        }
        .org__panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--slate);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 24px;
        }
        .org__panel-tag {
          background: var(--ink-softer);
          padding: 4px 10px;
          border-radius: 999px;
          color: var(--marquee);
        }
        .org__panel-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: var(--paper);
          margin-bottom: 8px;
        }
        .org__panel-row strong {
          color: var(--marquee);
          font-weight: 600;
        }
        .org__panel-bar {
          height: 6px;
          border-radius: 999px;
          background: var(--ink-softer);
          overflow: hidden;
          margin-bottom: 22px;
        }
        .org__panel-bar i {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, var(--marquee), var(--ticket));
          border-radius: 999px;
        }
        .org__panel-bar:last-child { margin-bottom: 0; }

        @media (max-width: 900px) {
          .org__inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
