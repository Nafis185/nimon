import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-glow cta-glow-one" />
      <div className="cta-glow cta-glow-two" />

      <div className="cta-container">

        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="cta-label"
        >
          <Sparkles size={13} strokeWidth={1.5} />
          <span>Let's create something beautiful</span>
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="cta-heading font-display"
        >
          Your wedding deserves
          <br />
          <span>more than a card.</span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="cta-description"
        >
          Tell us your story, and we'll turn it into a
          digital invitation your guests will remember.
        </motion.p>

        {/* ACTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="cta-actions"
        >
          {/* WHATSAPP */}
          <a
            href="https://wa.me/8801990979098?text=Hi%2C%20I%27m%20interested%20in%20a%20digital%20wedding%20invitation."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-button-primary"
          >
            <span>Start Your Invitation</span>

            <ArrowUpRight
              size={17}
              strokeWidth={1.6}
            />
          </a>

          {/* SHOWCASE */}
          <a
            href="#showcase"
            className="cta-button cta-button-secondary"
          >
            <span>Explore Our Work</span>
          </a>
        </motion.div>

        {/* BOTTOM NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="cta-bottom"
        >
          <span>Designed with intention</span>

          <span className="cta-bottom-line" />

          <span>Made for your story</span>
        </motion.div>

      </div>
    </section>
  );
}

export default CTA;