export function HeaderTitleSubtitle({ title, subtitle }) {
  return (
    <header className="page-header">
      <div className="video-bg">
        <video
          src="/videos/video-bg.mp4"
          autoPlay={true}
          muted={true}
          loop={true}
        ></video>
      </div>
      <div className="inner">
        <div className="container">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </header>
  );
}
