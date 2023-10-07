import { ClientsContentBlock } from "../components/ClientsContentBlock";
import { Explore } from "../components/Explore";
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

export default function About() {
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
          title={`WHO WE ARE`}
          subtitle={`We believe you might have gone through our awesome intro. Now
            let's get to know who we are.`}
        />
        <section className="text-content-block">
          <div className="container">
            <div className="row">
              <div className="col-12 wow" data-splitting={true}>
                <h3 className="section-title">
                  STRUM YOUR WAY TO <br />
                  STARDOM WITH US!
                </h3>
              </div>
              <div className="col-12 wow" data-splitting={true}>
                <h5></h5>
              </div>
              <div className="col-lg-3 col-md-6 wow" data-splitting={true}>
                <small>01</small>
                <h6>VISION</h6>
                <p>Define vision, choose style, draft song structure.</p>
              </div>
              <div className="col-lg-3 col-md-6 wow" data-splitting={true}>
                <small>02</small>
                <h6>COMPOSITION</h6>
                <p>Design structure, compose melodies, finalize lyrics.</p>
              </div>
              <div className="col-lg-3 col-md-6 wow" data-splitting={true}>
                <small>03</small>
                <h6>PRODUCTION</h6>
                <p>Set up environment, record tracks, music production.</p>
              </div>
              <div className="col-lg-3 col-md-6 wow" data-splitting={true}>
                <small>04</small>
                <h6>MIX & MASTER</h6>
                <p>
                  Mix layers, balance tracks, apply effects, finalize sound.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="process">
          <div className="container">
            <div className="row" style={{ paddingTop: "100px" }}>
              <div className="col-lg-12 about-intro">
                <h4 className="about-title">
                  WhiteCity Studios: Udaipur's Elite Recording Destination
                </h4>
                <p>
                  Dive into a world of musical excellence at WhiteCity Studios,
                  perfectly situated in the vibrant heart of Udaipur. From
                  tracking to mixing, mastering to post-production, we cater to
                  all your recording needs.
                </p>
                <p className="mb-30">
                  Established in 2023 by the renowned mixing maestro, Arpan
                  Jain, our studio is a testament to top-tier music production,
                  boasting state-of-the-art technology and equipment.
                </p>
              </div>
              <div className="col-lg-12 about-intro">
                <h4 className="about-title">
                  Why WhiteCity Studios Stands Out:
                </h4>
                <p>
                  <strong>Esteemed Clientele:</strong> We've had the privilege
                  of working with industry luminaries such as Harshdeep Kaur,
                  Kutle Khan, Tarannum Malik, Anirudh Varma Collective, Shubha
                  Mudgal, Sonam Kalra, Saptak Chatterjee, Pragnya Wakhlu,
                  Khanabadosh, Rudra, Rashmi Agarwal, and Sunanda Sharma.
                </p>
                <p>
                  <strong>Comprehensive Services:</strong> Our diverse range of
                  services includes recording, mixing, mastering, production
                  (arranging and composing), and post-production.
                </p>
                <p>
                  <strong>Experienced Team:</strong> Led by Arpan Jain, a music
                  production virtuoso with over 10 years in sound engineering,
                  our team brings unparalleled expertise to every project.
                </p>
                <p className="mb-30">
                  <strong>Tailored Solutions:</strong> Whether you're a solo
                  artist, a dynamic band, a seasoned pro, or just starting out,
                  we customize our services to align with your unique creative
                  vision.
                </p>
              </div>
              <div className="col-lg-12 about-intro">
                <p className="mb-30">
                  Solo artist or a dynamic band, newbie or industry veteran,
                  WhiteCity Studios is your ultimate destination to transform
                  your musical dreams into reality. Benefit from our extensive
                  array of recording and mixing services, complemented by a vast
                  collection of instruments and top-tier equipment, that has
                  made us the preferred choice for many.
                </p>
              </div>
              <div className="col-lg-12 about-intro">
                <h4 className="">
                  Ready to elevate your music to new heights? Experience
                  unparalleled quality and professionalism with WhiteCity
                  Studios, where every note matters.
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section className="text-content-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 wow" data-splitting>
                <h3 className="section-title">
                  VIBRANT. <br />
                  VERSATILE. <br />
                  VISIONARY.
                </h3>
                <div style={{ width: "100%" }}>
                  <ul className="social-horiz">
                    <li>
                      <a
                        data-noredirect="true"
                        target="_blank"
                        href="https://linkedin.com/in/mixbyarpan"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        data-noredirect="true"
                        target="_blank"
                        href="https://www.instagram.com/mixbyarpan"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        data-noredirect="true"
                        target="_blank"
                        href="https://api.whatsapp.com/send/?text=Hi Arpan%0aI am reaching out via WhiteCity Studios Website. How are you doing?&type=custom_url&phone=918946989311"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        data-noredirect="true"
                        target="_blank"
                        href="mailto:jain.arpan53@gmail.com"
                      >
                        <i className="fa fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <h4>Introducing the Maestro: Arpan Jain</h4>
                <p className="pb-16">
                  Dive deep into the world of sound, and you'll find Arpan Jain
                  at its very heart. A maestro in the realm of recording &
                  mixing, Arpan's journey in the industry spans over a decade,
                  during which he has etched his name as one of the most
                  sought-after studio engineers.
                </p>
                <p className="pb-16">
                  Educated at SACAC, Delhi, one of India's premier audio
                  engineering institutes, Arpan's prodigious talent in sound
                  engineering was evident from the outset. His illustrious
                  career saw him mastering his craft at renowned studios,
                  culminating as the Head Engineer at Delhi's prestigious RRE
                  Studios.
                </p>

                <p className="pb-16">
                  Arpan's bond with music transcends the technical realm; he's
                  an adept musician whose guitar skills span diverse genres,
                  from jazz to rock. Hailing from Udaipur, his musical journey
                  began at 15, leading him to numerous music festivals across
                  India.
                </p>

                <p className="pb-16" style={{ fontStyle: "italic" }}>
                  "In Arpan Jain, you find not just a studio engineer, but a
                  maestro, a musician, and a mentor. His life is a symphony, and
                  every note resonates with his love for music."
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="intro-image"
          style={{ position: "relative", height: "100vh" }}
        >
          <div className="skyline"></div>

          <div className="skyline-overlay"></div>

          <div className="container heritage-container">
            <div className="row">
              <div className="col-lg-12 mb-30">
                <p className="pb-16 fw-600">
                  Why WhiteCity? Discover the Essence of Udaipur's White Marvel
                  in Music:
                </p>
                <p>
                  Udaipur, the jewel of Rajasthan, is fondly dubbed the "White
                  City" for its iconic white-marble edifices. Nestled amidst
                  serene lakes, the city's architecture is a harmonious blend of
                  Rajasthani traditions and Mughal grandeur. At the heart of
                  this white wonder is the majestic City Palace, a testament to
                  Udaipur's rich marble legacy.
                </p>
              </div>
              <div className="col-lg-12">
                <p className="pb-16 fw-600">
                  Why is WhiteCity Music Studio Unique?
                </p>
                <p>
                  <span className="pb-16 fw-600">
                    Inspired by Udaipur's Legacy:
                  </span>
                  Our studio embodies the essence of Udaipur's white marble
                  splendor, offering musicians a tranquil space that resonates
                  with the city's serene lakes and palatial elegance.
                </p>
                <p>
                  <span className="pb-16 fw-600">
                    Symbolism of White in Music:
                  </span>
                  White transcends mere color. It's a symbol of purity,
                  innocence, and simplicity. Dive deep into its symbolic
                  richness every time you create at our studio. The
                  Psychological
                </p>

                <p>
                  <span className="pb-16 fw-600">Power of White:</span> White's
                  calming aura can soothe the mind and invigorate the soul. It
                  amplifies other hues, bringing out the best in them, much like
                  how our studio enhances every note you play.
                </p>
                <p>
                  <span className="pb-16 fw-600">WhiteCity Music Studio</span> -
                  Where Udaipur's architectural brilliance meets musical
                  excellence. Join us in creating harmonies that echo the city's
                  timeless charm.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ClientsContentBlock />
      </main>
      <Footer />
    </div>
  );
}
