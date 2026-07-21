const events = [
  {
    day: '26',
    month: 'JUL',
    title: 'Sunset Rooftop Sessions',
    venue: 'Skyline Terrace, Pune',
    price: '₹599',
    category: 'Music',
    code: 'EH-1042',
  },
  {
    day: '29',
    month: 'JUL',
    title: 'Indie Makers Meetup',
    venue: 'The Loft Co-work, Baner',
    price: 'Free',
    category: 'Networking',
    code: 'EH-1043',
  },
  {
    day: '02',
    month: 'AUG',
    title: 'City Jazz Night',
    venue: 'Blue Note Lounge',
    price: '₹899',
    category: 'Music',
    code: 'EH-1044',
  },
  {
    day: '06',
    month: 'AUG',
    title: 'Startup Pitch Day',
    venue: 'Innovation Hub, Hinjawadi',
    price: '₹300',
    category: 'Business',
    code: 'EH-1045',
  },
  {
    day: '09',
    month: 'AUG',
    title: 'Food Truck Festival',
    venue: 'Riverside Grounds',
    price: 'Free entry',
    category: 'Food',
    code: 'EH-1046',
  },
  {
    day: '12',
    month: 'AUG',
    title: 'Watercolor Workshop',
    venue: 'Studio 9, Kothrud',
    price: '₹450',
    category: 'Workshop',
    code: 'EH-1047',
  },
]

export default function UpcomingEvents() {
  return (
    <section className="events" id="events">
      <div className="container">
        <div className="events__head">
          <div>
            <p className="eyebrow">On the board</p>
            <h2 className="events__title">Upcoming events</h2>
          </div>
          <a href="#" className="events__all">See full calendar →</a>
        </div>

        <div className="events__grid">
          {events.map((ev) => (
            <article className="ticket" key={ev.code}>
              <div className="ticket__main">
                <div className="ticket__date">
                  <span className="ticket__day">{ev.day}</span>
                  <span className="ticket__month">{ev.month}</span>
                </div>
                <div className="ticket__body">
                  <span className="ticket__category">{ev.category}</span>
                  <h3 className="ticket__title">{ev.title}</h3>
                  <p className="ticket__venue">{ev.venue}</p>
                </div>
              </div>

              <div className="ticket__perforation" aria-hidden="true">
                <span className="ticket__notch ticket__notch--left" />
                <span className="ticket__dashes" />
                <span className="ticket__notch ticket__notch--right" />
              </div>

              <div className="ticket__stub">
                <span className="ticket__price">{ev.price}</span>
                <span className="ticket__code">{ev.code}</span>
                <button className="ticket__btn">Reserve</button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .events {
          padding: 100px 0 110px;
          background: var(--ink);
        }
        .events__head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 44px;
        }
        .events__title {
          font-size: clamp(30px, 4vw, 44px);
          color: var(--paper);
          text-transform: uppercase;
          margin-top: 10px;
        }
        .events__all {
          font-size: 14px;
          font-weight: 600;
          color: var(--marquee);
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
        }
        .events__all:hover {
          border-color: var(--marquee);
        }
        .events__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .ticket {
          display: flex;
          flex-direction: column;
          background: var(--ink-soft);
          border: 1px solid var(--line-dark);
          border-radius: 14px;
          overflow: hidden;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .ticket:hover {
          transform: translateY(-4px);
          border-color: rgba(255,184,77,0.35);
        }
        .ticket__main {
          display: flex;
          gap: 18px;
          padding: 22px 22px 20px;
        }
        .ticket__date {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 56px;
          height: 56px;
          border-radius: 10px;
          background: var(--ink-softer);
          border: 1px solid var(--line-dark);
          flex-shrink: 0;
        }
        .ticket__day {
          font-family: var(--font-display);
          font-size: 20px;
          color: var(--marquee);
          line-height: 1;
        }
        .ticket__month {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--slate);
          margin-top: 2px;
        }
        .ticket__category {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ticket);
        }
        .ticket__title {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 17px;
          color: var(--paper);
          margin-top: 6px;
          line-height: 1.3;
        }
        .ticket__venue {
          font-size: 13px;
          color: var(--slate);
          margin-top: 6px;
        }

        .ticket__perforation {
          position: relative;
          display: flex;
          align-items: center;
        }
        .ticket__dashes {
          flex: 1;
          height: 0;
          border-top: 2px dashed var(--line-dark);
        }
        .ticket__notch {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--ink);
          flex-shrink: 0;
        }
        .ticket__notch--left { margin-left: -9px; }
        .ticket__notch--right { margin-right: -9px; }

        .ticket__stub {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 22px;
          background: var(--ink-softer);
        }
        .ticket__price {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--paper);
        }
        .ticket__code {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--slate-dark);
          letter-spacing: 0.05em;
        }
        .ticket__btn {
          background: transparent;
          border: 1px solid var(--marquee);
          color: var(--marquee);
          font-size: 12px;
          font-weight: 600;
          padding: 7px 14px;
          border-radius: 999px;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .ticket__btn:hover {
          background: var(--marquee);
          color: var(--ink);
        }

        @media (max-width: 980px) {
          .events__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .events__grid { grid-template-columns: 1fr; }
          .events__head { flex-direction: column; align-items: flex-start; gap: 14px; }
        }
      `}</style>
    </section>
  )
}
