import { motion } from "motion/react";
import heroInvitation from "./assets/hero-invitation.jpg";

import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Experiences from "./components/Experiences";
import InvitationShowcase from "./components/InvitationShowcase";
import Packages from "./components/Packages";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="app">

      {/* ========================================
          NAVBAR
      ======================================== */}

      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />


      {/* ========================================
          HERO
      ======================================== */}

     <section id="home" className="hero-section">

  <div className="hero-glow hero-glow-one" />
  <div className="hero-glow hero-glow-two" />

  <div className="hero-content">

    {/* HERO VISUAL */}
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="hero-image-wrapper">

        <img
          src="/images/hero-placeholder.jpg"
          alt="Digital Invitation Designs"
          className="hero-image"
        />

        <div className="hero-image-overlay" />

        <div className="hero-image-label">
          <Sparkles size={14} />
          <span>Digital Invitation Studio</span>
        </div>

      </div>
    </motion.div>

    {/* HERO TEXT */}
    <motion.div
      className="hero-copy"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
    >

      <motion.div className="hero-eyebrow">
        <Sparkles size={15} strokeWidth={1.8} />
        <span>Invitations for Every Occasion</span>
      </motion.div>

      <h1 className="hero-title font-display">
        Beautiful Invitations.
        <br />
        <span>Made for Every Moment.</span>
      </h1>

      <p className="hero-description">
        Wedding, birthday, engagement, anniversary and more —
        beautifully designed digital invitations made to be shared.
      </p>

      <div className="hero-actions">

        <a
          href="#showcase"
          className="hero-button hero-button-primary"
        >
          <span>Explore Invitations</span>
          <ArrowUpRight size={18} strokeWidth={1.8} />
        </a>

        <a
          href="#packages"
          className="hero-button hero-button-secondary"
        >
          <span>View Packages</span>
        </a>

      </div>

    </motion.div>

  </div>

  <motion.div
    className="hero-bottom"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
  >
    <span>Digital invitations</span>

    <div className="hero-scroll">
      <span>Scroll to explore</span>
      <ArrowDown size={15} />
    </div>

    <span>Made with intention</span>
  </motion.div>

</section>


      {/* ========================================
          EXPERIENCES
      ======================================== */}

   <Experiences />
<InvitationShowcase />
<Packages />
<CTA />
<Footer />

    </main>
  );
}

export default App;