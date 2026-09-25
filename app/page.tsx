'use client';

import { useState } from 'react';

const eventDetails = [
  { label: 'Date', value: 'Saturday, November 14', note: 'placeholder date' },
  { label: 'Time', value: '8 PM — late', note: 'placeholder time' },
  { label: 'Place', value: 'The Glass House', note: 'placeholder venue' },
  { label: 'Dress code', value: 'Black + white', note: 'with a touch of red' },
];

export default function Home() {
  const [introOpen, setIntroOpen] = useState(true);
  const assetBase = import.meta.env.BASE_URL;

  return (
    <main className="invite">
      <div className={`opening ${introOpen ? '' : 'opening--leaving'}`} aria-hidden={!introOpen}>
        <div className="opening__veil" />
        <div className="opening__message">
          <span>For one night only</span>
          <p>You’re invited.</p>
          <button type="button" onClick={() => setIntroOpen(false)}>Open invitation</button>
        </div>
      </div>

      <section className="invite-scene" aria-label="Bella's sweet sixteen invitation">
        <img className="invite-scene__balloons" src={`${assetBase}intro-balloons.png`} alt="" />
        <div className="invite-scene__shade" />

        <article className={`birthday-card ${introOpen ? '' : 'birthday-card--visible'}`}>
          <header className="card-masthead">
            <span>16 / 11 / 26</span>
            <strong>Bella’s Sweet Sixteen</strong>
            <span className="card-masthead__mark" aria-label="XO inspired">XO</span>
          </header>

          <figure className="card-cover">
            <img src={`${assetBase}og.png`} alt="Black, gray, and ivory balloons surrounding Bella XVI lettering" />
          </figure>
          <h1 className="sr-only">Bella XVI — Sweet Sixteen</h1>

          <p className="card-message">A night in black and white. Come celebrate sixteen with Bella.</p>

          <div className="card-details" aria-label="Party information">
            {eventDetails.map((detail) => (
              <div className="card-detail" key={detail.label}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
                <small>{detail.note}</small>
              </div>
            ))}
          </div>

          <footer className="card-footer">
            <div>
              <span>Guest list</span>
              <strong>RSVP details coming soon</strong>
            </div>
            <p>After dark<br />MMXXVI</p>
          </footer>
        </article>
      </section>
    </main>
  );
}
