import React from "react";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__inner">
        <div className="mono not-found__meta">404 — PAGE NOT FOUND</div>

        <div className="not-found__layout">
          <div className="not-found__number">404</div>

          <div className="not-found__copy">
            <div className="mono not-found__eyebrow">ROADS ENDED HERE</div>
            <h1>Page not found.</h1>

            <p className="not-found__desc">
              The page you’re looking for has drifted off the map. Let’s bring
              you back to the portfolio and keep exploring.
            </p>

            <div className="not-found__actions">
              <a href="/" className="not-found__button">
                GO HOME
              </a>

              <a
                href="mailto:hello@rosidhakimudin.dev"
                className="not-found__link mono"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
