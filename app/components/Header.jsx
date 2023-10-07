import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="video-hero">
      <div className="video-bg">
        <video
          src="/videos/video-bg.mp4"
          autoPlay={true}
          muted={true}
          loop={true}
        ></video>
      </div>
      <div className="inner">
        <span>WhiteCity Studios</span>
        <span></span>
        <a
          href="https://forms.gle/qLmgpp1hvn4aRsoJ9"
          className="btn-rounded"
          style={{ position: "relative", top: "20px" }}
          data-noredirect="true"
          target="_blank"
        >
          BOOK A SESSION NOW&nbsp;&nbsp;<i className="fa fa-angle-right"></i>
        </a>
      </div>
    </header>
  );
}
