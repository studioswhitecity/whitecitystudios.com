import Explore from "@/app/components/Explore";
import ClientsContentBlock from "@/app/components/ClientsContentBlock";
import Footer from "@/app/components/Footer";
import HeaderTitleSubtitle from "@/app/components/HeaderTitleSubtitle";
import PageTransition from "@/app/components/PageTransition";
import Preloader from "@/app/components/Preloader";
import Sidebar from "@/app/components/Sidebar";
import SiteNavigation from "@/app/components/SiteNavigation";
import SocialMedia from "@/app/components/SocialMedia";

export default function Contact() {
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
          title={`GET IN TOUCH`}
          subtitle={`Feel free to say hi anytime and we'll be back to you with speed of
              sound and a Tea!`}
        />
        <section className="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <h3 className="section-title">
                  WE ARE <br />
                  HERE FOR YOU
                </h3>
              </div>
              <div className="col-lg-4 col-md-6">
                <h6>VISIT US</h6>
                <address>
                  39, Mayurvan Colony,
                  <br />
                  Paneriyon Ki Madri,
                  <br />
                  Udaipur, Rajasthan - 313002
                </address>
              </div>
              <div className="col-lg-3 col-md-6">
                <h6>SAY HELLO</h6>
                <address>
                  <a
                    href="tel:00918946989311"
                    style={{ textDecoration: "none" }}
                    data-noredirect="true"
                  >
                    <p>(+91) 894 698 9311</p>
                  </a>
                  <a
                    href="tel:00917976198131"
                    style={{ textDecoration: "none" }}
                    data-noredirect="true"
                  >
                    <p>(+91) 797 619 8131</p>
                  </a>
                  <a
                    href="mailto:studioswhitecity@gmail.com"
                    style={{ textDecoration: "none" }}
                    data-noredirect="true"
                  >
                    studioswhitecity@gmail.com
                  </a>
                </address>
              </div>
              <div className="col-lg-12" style={{ width: "100%", margin: "0" }}>
                <div className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58048.046973558914!2d73.64884164811353!3d24.589094895241036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967efa45a6907c7%3A0xcfcba2d46d5cc62b!2sWhiteCity%20Studios!5e0!3m2!1sen!2sin!4v1695243621474!5m2!1sen!2sin"
                    width="1000"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
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
