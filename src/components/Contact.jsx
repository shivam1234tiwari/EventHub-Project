import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__copy">
          <p className="eyebrow">Get in touch</p>
          <h2 className="contact__title">
            Questions, ideas, <br /> or partnerships?
          </h2>
          <p className="contact__sub">
            Tell us what you're planning — as an attendee or an organizer —
            and we'll point you in the right direction.
          </p>
          <div className="contact__meta">
            <div>
              <span className="contact__meta-label">Email</span>
              <span>hello@eventhub.app</span>
            </div>
            <div>
              <span className="contact__meta-label">Support hours</span>
              <span>Mon–Sat, 10am–7pm IST</span>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="contact__success">
              <strong>Message sent.</strong>
              <span>We'll get back to you within one business day.</span>
            </div>
          ) : (
            <>
              <label>
                Name
                <input type="text" required placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" required placeholder="you@example.com" />
              </label>
              <label>
                Message
                <textarea rows="4" required placeholder="What's on your mind?" />
              </label>
              <button type="submit">Send message</button>
            </>
          )}
        </form>
      </div>

      <style>{`
        .contact {
          padding: 100px 0 110px;
          background: var(--paper);
          color: var(--ink);
        }
        .contact__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }
        .contact .eyebrow { color: var(--ticket); }
        .contact__title {
          font-size: clamp(28px, 4vw, 42px);
          text-transform: uppercase;
          margin-top: 10px;
          line-height: 1.08;
        }
        .contact__sub {
          margin-top: 18px;
          font-size: 15px;
          line-height: 1.6;
          color: var(--slate-dark);
          max-width: 400px;
        }
        .contact__meta {
          display: flex;
          gap: 40px;
          margin-top: 36px;
        }
        .contact__meta div {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 14px;
        }
        .contact__meta-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--ticket);
        }

        .contact__form {
          display: flex;
          flex-direction: column;
          gap: 18px;
          background: var(--white);
          border: 1px solid var(--line-light);
          border-radius: 16px;
          padding: 32px;
        }
        .contact__form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--ink);
        }
        .contact__form input,
        .contact__form textarea {
          font-family: var(--font-body);
          font-size: 14px;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid var(--line-light);
          background: var(--paper-dim);
          color: var(--ink);
          resize: none;
        }
        .contact__form input:focus,
        .contact__form textarea:focus {
          outline: none;
          border-color: var(--ticket);
        }
        .contact__form button {
          margin-top: 6px;
          background: var(--ink);
          color: var(--paper);
          border: none;
          border-radius: 10px;
          padding: 14px;
          font-weight: 600;
          font-size: 14px;
          transition: background 0.2s ease;
        }
        .contact__form button:hover {
          background: #26265a;
        }
        .contact__success {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 30px 10px;
          text-align: center;
        }
        .contact__success strong {
          font-size: 16px;
          color: var(--ink);
        }
        .contact__success span {
          font-size: 14px;
          color: var(--slate-dark);
        }

        @media (max-width: 860px) {
          .contact__inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
