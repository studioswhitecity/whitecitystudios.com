import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 wow" data-splitting={true}>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { x: "-100%" },
                visible: {
                  x: 0,
                  transition: {
                    delay: 0.2,
                  },
                },
              }}
              className="section-title"
            >
              REHEARSE <br />
              RECORD <br />
              RULE
            </motion.h3>
            <motion.a
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 0.2,
                  },
                },
              }}
              href="mailto:studioswhitecity@gmail.com"
              style={{ textDecoration: "none" }}
              data-noredirect="true"
            >
              studioswhitecity@gmail.com
            </motion.a>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { x: "100%" },
              visible: {
                x: 0,
                transition: {
                  delay: 0.2,
                },
              },
            }}
            className="col-lg-7 wow"
            data-splitting={true}
          >
            <p>
              In a city where white palaces meet serene lakes, our music is the
              echo of ancient tales and the promise of peaceful tomorrows.
            </p>
            <h6>Arpan Jain</h6>
            <small>Founder, WhiteCity Studios</small>
            <b>10+</b>
            <h4>
              YEARS OF
              <br />
              MUSICAL
              <br />
              EXPERIENCE
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
