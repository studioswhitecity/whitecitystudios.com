export default function Preloader() {
  return (
    <div className="preloader">
      <div className="layer"></div>
      <div className="inner">
        <figure>
          <dotlottie-player
            src="/images/preloader.lottie"
            background="transparent"
            speed="1"
            style={{ width: "200px", height: "200px" }}
            direction="1"
            mode="bounce"
            loop
            autoplay
          />
        </figure>
        <span style={{ position: "relative", top: "-10px" }}>
          WhiteCity Studios
        </span>
      </div>
    </div>
  );
}
