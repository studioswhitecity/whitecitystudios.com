import { BrandName, Explore } from "../components/Explore";
import { ClientsContentBlock } from "../components/ClientsContentBlock";
import { Footer } from "../components/Footer";
import { HeaderTitleSubtitle } from "../components/HeaderTitleSubtitle";
import { IconContentBlock } from "../components/IconContentBlock";
import { IntroImage } from "../components/IntroImage";
import { IntroSection } from "../components/IntroSection";
import { PageTransition } from "../components/PageTransition";
import { Preloader } from "../components/Preloader";
import { Sidebar } from "../components/Sidebar";
import { SiteNavigation } from "../components/SiteNavigation";
import { SocialMedia } from "../components/SocialMedia";

export default function JamPad() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Preloader />
      <PageTransition />
      <SiteNavigation />
      <SocialMedia />
      <Explore />
      <main>
        <Sidebar />

        <HeaderTitleSubtitle
          title={`JAMPAD`}
          subtitle={`Where your music transcends, turning every chord into an enchanting symphony of creativity!`}
        />
        <section className="case-study">
          <div className="container">
            <div className="row">
              <div className="col-12 wow" data-splitting={true}>
                <h3 className="section-title">
                  ELEVATING ARTISTIC VOICES <br />
                  IN A CREATIVE SPACE!
                </h3>
              </div>
              <div className="col-lg-8 col-md-10 wow" data-splitting>
                <h6>
                  PIONEERING UNBOUNDED CREATIVITY IN THE CITY'S FIRST & ONLY
                  JAMPAD:
                </h6>
                <p>
                  Step into WhiteCity Studios: JamPad, the first of its kind in
                  the city, where your artistic spirit is not just welcomed, but
                  celebrated. Conceived by Arpan, this is your sanctuary in the
                  city, providing not just a space, but a vibrant community
                  where your creativity is bound to flourish.
                </p>
                <p>
                  Imagine a place where your musical notes are free to dance in
                  soundproofed practice rooms, and your creations find a voice
                  through top-tier recording facilities and dynamic performance
                  spaces. Envisage a world where artists alike converge,
                  exploring and pushing the envelope of their craft.
                </p>
                <p>
                  At affordable rates, immerse yourself in an environment that
                  not only hosts a plethora of performances, workshops, and
                  events but also champions your artistic journey, making it an
                  inspiring, integral part of the city's cultural heartbeat.
                </p>
              </div>
              <div className="col-lg-8 col-md-10 wow" data-splitting>
                <h6>AMENITIES:</h6>
                <p>
                  <ul>
                    <li>Fully soundproofed and acoustically treated.</li>
                    <li>Fully air conditioned.</li>
                    <li>Rooftop lounge area.</li>
                  </ul>
                </p>
              </div>
              <div className="col-lg-8 col-md-10 wow" data-splitting>
                <h6>EQUIPMENTS:</h6>
                <p>
                  <ul>
                    <li>Mapex Acoustic Drum Kit (5 Pcs)</li>
                    <li>Zildjian Planet Z Cymbals</li>
                    <li>Boss Katana-50 MKII Guitar Amplifier</li>
                    <li>Shure SM-57 & SM-58 Microphones</li>
                  </ul>
                </p>
              </div>
              <div className="col-lg-8 col-md-10 wow" data-splitting>
                <h6>PA SYSTEM:</h6>
                <p>
                  <ul>
                    <li>Mackie Thump 215 15" 1400W Powered Loudspeakers</li>
                    <li>Yamaha MG166CX Analog Mixer</li>
                  </ul>
                </p>
              </div>
              <div className="col-md-5 wow" data-splitting>
                <h6>DIMENSIONS</h6>
                <p>24 Ft. X 16 Ft.</p>
              </div>
              <div className="col-md-5 wow" data-splitting>
                <h6>TIMINGS</h6>
                <p>
                  9 AM - 7 PM (Everyday)
                  <br />
                  Sometimes can be pushed to 9 PM on request.
                </p>
              </div>
              <div className="col-md-5 wow" data-splitting>
                <h6>FOR BOOKINGS/PRICING</h6>
                <p>+91-8946989311, +91-7976198131</p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <figure>
                  <img src="/images/slides/1.jpg" alt="Image" />
                </figure>
              </div>

              <div className="col-md-4">
                <figure>
                  <img src="/images/slides/jampad1.jpg" alt="Image" />
                </figure>
              </div>

              <div className="col-md-4">
                <figure>
                  <img src="/images/slides/jampad5.jpg" alt="Image" />
                </figure>
              </div>

              <div className="col-md-4">
                <figure>
                  <img src="/images/slides/jampad3.jpg" alt="Image" />
                </figure>
              </div>

              <div className="col-md-6">
                <figure>
                  <img src="/images/slides/jampad9.jpg" alt="Image" />
                </figure>
              </div>

              <div className="col-md-6">
                <figure>
                  <img src="/images/slides/jampad2.jpg" alt="Image" />
                </figure>
              </div>

              <div className="col-md-4">
                <figure>
                  <img src="/images/slides/jampad4.jpg" alt="Image" />
                </figure>
              </div>

              <div className="col-md-4">
                <figure>
                  <img src="/images/slides/jampad7.jpg" alt="Image" />
                </figure>
              </div>

              <div className="col-md-4">
                <figure>
                  <img src="/images/slides/jampad8.jpg" alt="Image" />
                </figure>
              </div>

              {/* <div className="col-12">
                <figure>
                  <img src="images/slide01.jpg" alt="Image" />
                </figure>
              </div> */}

              <div className="col-12 wow" data-splitting>
                <p
                  className="section-title"
                  style={{
                    textAlign: "center",
                    marginTop: "50px",
                    fontSize: "3vw",
                  }}
                >
                  LOOKING FORWARD TO JAM WITH YOU!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
