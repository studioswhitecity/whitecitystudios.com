export default function GlimpsesBlock() {
  return (
    <section className="case-study">
      <div className="container">
        <div className="row">
          <div className="col-12 wow" data-splitting={true}>
            <h3 className="section-title">
              SNEAK PEEK INTO <br />
              THE STUDIO!
            </h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <figure>
              <img src="/images/slides/3.jpg" alt="Image" />
            </figure>
          </div>

          <div className="col-md-4">
            <figure>
              <img src="/images/slides/4.jpg" alt="Image" />
            </figure>
          </div>

          <div className="col-md-4">
            <figure>
              <img src="/images/slides/5.jpg" alt="Image" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
