import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* ========================================
            TOP
        ======================================== */}

        <div className="footer-top">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-brand"
          >
            <a
              href="#"
              className="footer-logo font-display"
            >
              Wedding<span>.</span>
            </a>

            <p>
              Beautifully crafted digital wedding
              invitations, made around your story.
            </p>
          </motion.div>


          {/* NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="footer-column"
          >
            <span className="footer-column-title">
              Explore
            </span>

            <a href="#experiences">
              Experiences
            </a>

            <a href="#showcase">
              Our Work
            </a>

            <a href="#packages">
              Packages
            </a>

            <a href="#contact">
              Contact
            </a>
          </motion.div>


          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="footer-column"
          >
            <span className="footer-column-title">
              Start a conversation
            </span>

            <a
              href="https://wa.me/8801990979098?text=Hi%2C%20I%27m%20interested%20in%20a%20digital%20wedding%20invitation."
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              WhatsApp

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
              />
            </a>

            <span className="footer-contact-number">
              +880 1990 979098
            </span>
          </motion.div>

        </div>


        {/* ========================================
            DIVIDER
        ======================================== */}

        <div className="footer-divider" />


        {/* ========================================
            BOTTOM
        ======================================== */}

        <div className="footer-bottom">

          <span>
            © 2026 Wedding. All rights reserved.
          </span>

          <span className="footer-credit">
            Designed & developed by{" "}

            <a
              href="https://chronocloud365.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              ChronoCloud365
            </a>
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;