import Explore from "@/app/components/Explore";
import ClientsContentBlock from "@/app/components/ClientsContentBlock";
import Footer from "@/app/components/Footer";
import HeaderTitleSubtitle from "@/app/components/HeaderTitleSubtitle";
import PageTransition from "@/app/components/PageTransition";
import Preloader from "@/app/components/Preloader";
import Sidebar from "@/app/components/Sidebar";
import SiteNavigation from "@/app/components/SiteNavigation";
import SocialMedia from "@/app/components/SocialMedia";

export default function Showcase() {
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
          title={"WHAT WE DO"}
          subtitle={
            "Now that you know who we are. Let's get to know more about our work!"
          }
        />
        {/* <header className="slider">
          <div className="swiper-container gallery-top">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide"
                data-background="images/slides/1.jpeg"
              ></div>

              <div
                className="swiper-slide"
                data-background="images/slides/2.jpeg"
              ></div>
              <div
                className="swiper-slide"
                data-background="images/slides/3.jpeg"
              ></div>
              <div
                className="swiper-slide"
                data-background="images/slides/4.jpeg"
              ></div>
            </div>

            <div className="slide-progress">
              <span>01</span>
              <div className="swiper-pagination"></div>
              <span>04</span>
            </div>

            <div className="swiper-button-prev">PREV</div>

            <div className="swiper-button-next">NEXT</div>
          </div>

          <div className="swiper-container gallery-thumbs">
            <div className="swiper-wrapper"></div>
          </div>
        </header> */}
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 wow" data-splitting>
                <h3 className="section-title">
                  VIBE AT
                  <br />
                  WHITECITY
                  <br />
                  STUDIOS
                </h3>
                <a href="#">studioswhitecity@gmail.com</a>
              </div>
              <div className="col-lg-5 wow" data-splitting>
                <p>
                  In the city of lakes and legacy, our cozy studio pulses with
                  vast dreams. Our diversity crafts harmonies, blending
                  tradition with innovation. Here, every note soars with
                  ambition, and every song echoes our united spirit.
                </p>
                <h6>Arpan Jain</h6>
                <small>Founder</small>
                <b className="logo-small" />
                <h4>
                  Compose.
                  <br />
                  Connect.
                  <br />
                  Conquer.
                  <br />
                  Together!
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section className="icon-content-block">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 wow" data-splitting>
                <br />
                <br />
                <h3 className="section-title" style={{ marginBottom: "0" }}>
                  Rhythms. Aesthetics. Soundscapes.
                </h3>
                <h4>
                  We blend them seamlessly to craft the most inspiring studio
                  experience that resonates with passion.
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section className="works">
          <ul id="list-works">
            <li>
              <figure className="reveal-effect masker wow">
                <iframe
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1696331373&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
              </figure>
            </li>
            <li>
              <figure className="reveal-effect masker wow">
                <iframe
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1696333203&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
              </figure>
            </li>
            <li>
              <figure className="reveal-effect masker wow">
                <iframe
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1696332417&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
              </figure>
            </li>
            <li style={{ width: "auto", margin: "0px auto" }}>
              <figure className="reveal-effect masker wow">
                <iframe
                  id="youtube-iframe"
                  width="1000"
                  height="550"
                  src="https://www.youtube.com/embed/videoseries?si=S2t-8VnERH-kkt2X&amp;list=PLJq9h5ri4ZSyTgZmjaduB0NfXdIroLhzQ"
                  title="WhiteCity Soundscapes: The Best of Our Studio"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </figure>
            </li>
          </ul>
        </section>
        <ClientsContentBlock />
      </main>
      <Footer />
    </div>
  );
}
