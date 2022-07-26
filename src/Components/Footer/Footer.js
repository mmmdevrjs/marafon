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
            <div className="rightBoxes">
              <div className="middleBox">
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
              </div>
              <div className="right">
                <span>by</span>
                <a href="https://www.instagram.com/sociallyuz/">
                  Socially Design Agency
                </a>
              </div>
            </div>
          </div>

          <div className="mobileFooter">
            <div className="oneBox">
              <p>© Socially Design Academy — Barcha huquqlar himoyalangan.</p>
            </div>
            <div className="twoBox">
              <ul className="ul">
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
              </ul>
            </div>
            <div className="threeBox">
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
