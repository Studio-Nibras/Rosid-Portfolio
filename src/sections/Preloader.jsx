import React from "react";

export default function Preloader({ isHidden = false }) {
  return (
    <div
      className={`preloader ${isHidden ? "preloader--hidden" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="preloader__frame">
        <div className="preloader__top mono">
          <span>01 / 03</span>
          <span>ROSID // MAKE IT LOUD</span>
        </div>

        <div className="preloader__body">
          <div className="preloader__logo">
            <span>R</span>
          </div>

          <div className="preloader__copy">
            <div className="preloader__line" />
            <h2>ROSID</h2>
            <span className="mono preloader__tag">
              DESIGN • BUILD • ITERATE
            </span>
          </div>
        </div>

        <div className="preloader__bottom">
          <span className="preloader__status mono">
            <i className="preloader__dot" />
            LOADING
          </span>

          <div className="preloader__progress" aria-hidden="true">
            <span className="preloader__progress-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}
