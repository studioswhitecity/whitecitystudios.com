"use client";

export default function Sidebar() {
  return (
    <aside className="left-side">
      <div className="logo">
        <a href="/">
          <img src="images/logo.svg" alt="WhiteCity Studios Logo" />
        </a>
      </div>
      <div className="hamburger" id="hamburger">
        <div className="hamburger__line hamburger__line--01">
          <div className="hamburger__line-in hamburger__line-in--01"></div>
        </div>
        <div className="hamburger__line hamburger__line--02">
          <div className="hamburger__line-in hamburger__line-in--02"></div>
        </div>
        <div className="hamburger__line hamburger__line--03">
          <div className="hamburger__line-in hamburger__line-in--03"></div>
        </div>
        <div className="hamburger__line hamburger__line--cross01">
          <div className="hamburger__line-in hamburger__line-in--cross01"></div>
        </div>
        <div className="hamburger__line hamburger__line--cross02">
          <div className="hamburger__line-in hamburger__line-in--cross02"></div>
        </div>
      </div>
      <div className="follow-us">FOLLOW US</div>
      <div className="equalizer">
        <span></span> <span></span> <span></span> <span></span>
      </div>
    </aside>
  );
}
