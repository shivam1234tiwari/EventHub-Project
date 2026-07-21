export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          Event<span>Hub</span>
          <p>The board for everything happening near you.</p>
        </div>

        <div className="footer__cols">
          <div>
            <h4>Product</h4>
            <a href="#events">Events</a>
            <a href="#categories">Categories</a>
            <a href="#organizers">For organizers</a>
          </div>
          <div>
            <h4>Coming soon</h4>
            <span>Account login</span>
            <span>Create an event</span>
            <span>Online booking</span>
            <span>Organizer dashboard</span>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#contact">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} EventHub. All rights reserved.</span>
        <span>Built with React + Vite</span>
      </div>

      <style>{`
        .footer {
          background: var(--ink-soft);
          border-top: 1px solid var(--line-dark);
          padding-top: 60px;
        }
        .footer__inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 40px;
          padding-bottom: 50px;
        }
        .footer__brand {
          font-family: var(--font-display);
          font-size: 22px;
          color: var(--paper);
        }
        .footer__brand span { color: var(--marquee); }
        .footer__brand p {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--slate);
          margin-top: 12px;
          max-width: 240px;
        }
        .footer__cols {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .footer__cols h4 {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--marquee);
          margin-bottom: 16px;
        }
        .footer__cols a, .footer__cols span {
          display: block;
          font-size: 14px;
          color: var(--slate);
          margin-bottom: 10px;
        }
        .footer__cols a:hover {
          color: var(--paper);
        }
        .footer__bottom {
          display: flex;
          justify-content: space-between;
          padding: 20px 24px;
          border-top: 1px solid var(--line-dark);
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--slate-dark);
        }
        @media (max-width: 700px) {
          .footer__inner { grid-template-columns: 1fr; }
          .footer__cols { grid-template-columns: 1fr 1fr; }
          .footer__bottom { flex-direction: column; gap: 8px; }
        }
      `}</style>
    </footer>
  )
}
