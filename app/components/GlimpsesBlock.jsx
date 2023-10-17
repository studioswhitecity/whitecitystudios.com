import { motion } from "framer-motion";
export default function GlimpsesBlock() {
  return (
    <section className="case-study">
      <div className="container">
        <div className="row">
          <div className="col-12 wow" data-splitting={true}>
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
              SNEAK PEEK INTO <br />
              THE STUDIO!
            </motion.h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <motion.div
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
            className="col-md-4"
          >
            <figure>
              <img src="/images/slides/3.jpg" alt="Image" />
            </figure>
          </motion.div>

          <motion.div
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
            className="col-md-4"
          >
            <figure>
              <img src="/images/slides/4.jpg" alt="Image" />
            </figure>
          </motion.div>

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
            className="col-md-4"
          >
            <figure>
              <img src="/images/slides/5.jpg" alt="Image" />
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
