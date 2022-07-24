import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="main">
            <div className="left">
              <p>© Socially Design Academy — Barcha huquqlar himoyalangan.</p>
            </div>
            <div className="middle">
              <li>
                <a href="https://www.youtube.com/c/sociallyuz">YouTube </a>
                <span className="liner">/</span>
              </li>
              <li>
                <a href="https://socially.design/">Teletype</a>
                <span className="liner">/</span>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sociallyuz/"
                  className="nextA"
                >
                  Instagram
                </a>
                <span className="liner">/</span>
              </li>
              <li>
                <a href="https://t.me/sociallyuz">Telegram</a>
              </li>
            </div>
            <div className="right">
              <span>by</span>
              <a href="https://www.instagram.com/sociallyuz/">
                Socially Design Agency
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
