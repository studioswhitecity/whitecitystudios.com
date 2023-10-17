import { useContext } from "react";
import FramerContext from "../_context/FramerContext";

export default function IconContentBlock() {
  const motion = useContext(FramerContext);
  return (
    <section className="icon-content-block services-block">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 wow" data-splitting={true}>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { scale: 0.5, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                  },
                },
              }}
              className="section-title"
            >
              THE THINGS
              <br />
              WE ARE ABLE TO DO
            </motion.h3>
          </div>
          <div className="col-lg-4 col-md-3 wow" data-splitting={true}>
            <div className="content-block">
              <figure>
                <img src="images/services/s1.svg" alt="Image" />
              </figure>
              <h6>RECORDING</h6>
              <ul>
                <li>Live Recording</li>
                <li>Studio Recording</li>
                <li>Multi-track Recording</li>
                <li>Instrumental Recording</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-3 wow" data-splitting={true}>
            <div className="content-block selected">
              <figure>
                <img src="images/services/s2.svg" alt="Image" />
              </figure>
              <h6>MIXING & MASTERING</h6>
              <ul>
                <li>Mixing</li>
                <li>Mastering</li>
                <li>Vocal Tuning</li>
                <li>Mix Consultation</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-3 wow" data-splitting={true}>
            <div className="content-block">
              <figure>
                <img src="images/services/s3.svg" alt="Image" />
              </figure>
              <h6>CREATIVE PRODUCTION</h6>
              <ul>
                <li>Music Production</li>
                <li>Music Consultation</li>
                <li>Songwriting Assistance</li>
                <li>Arranging & Composing</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-3 wow" data-splitting={true}>
            <div className="content-block">
              <figure>
                <img src="images/services/s4.svg" alt="Image" />
              </figure>
              <h6>POST-PRODUCTION</h6>
              <ul>
                <li>Audio Editing</li>
                <li>Dubbing & Voiceovers</li>
                <li>Podcast Post-Production</li>
                <li>Sound Design (Film, Tv, etc.)</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-3 wow" data-splitting={true}>
            <div className="content-block">
              <figure>
                <img src="images/services/s5.svg" alt="Image" />
              </figure>
              <h6>SPECIALIZED SERVICES</h6>
              <ul>
                <li>Live Streaming Services</li>
                <li>Rehearsal Space (Jampad)</li>
                <li>Music Licensing Consultation</li>
                <li>Digital Distribution Assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
