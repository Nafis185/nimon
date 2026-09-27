
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const invitations = [
  {
    id: 1,
    couple: "Asif & Sadia",
    type: "Wedding Invitation",
    date: "Wedding Invitation",
    // Asif & Sadia — GitHub Pages Live Demo
    link: "https://nafis185.github.io/nimon-demos/asif-sadia/",
  },
  {
    id: 2,
    couple: "Karim & Roksana",
    type: "Wedding Invitation",
    date: "Wedding Invitation",
    // Karim & Roksana — GitHub Pages Live Demo
    link: "https://nafis185.github.io/nimon-demos/karim-roksana/",
  },
  {
    id: 3,
    couple: "Anok & Tanzina",
    type: "Wedding Invitation",
    date: "Wedding Invitation",
    // Anok & Tanzina — GitHub Pages Live Demo
    link: "https://nafis185.github.io/nimon-demos/anok%20tanzina.html",
  },

  // ========================================
  // ADD NEW INVITATIONS HERE
  // ========================================
  // {
  //   id: 4,
  //   couple: "New Couple",
  //   type: "Wedding Invitation",
  //   date: "Wedding Invitation",
  //   // New Couple — GitHub Pages Live Demo
  //   link: "https://nafis185.github.io/nimon-demos/new-couple/",
  // },
];

function InvitationShowcase() {
  return (
    <section
      id="showcase"
      className="invitation-showcase-section"
    >
      <div className="invitation-showcase-container">

        {/* ========================================
            HEADER
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="invitation-showcase-header"
        >
          <div className="invitation-showcase-label">
            <span className="invitation-showcase-dot" />

            <span>
              Our Work
            </span>
          </div>

          <div className="invitation-showcase-heading">
            <h2 className="font-display">
              Real weddings.
              <br />

              <span>
                Beautifully online.
              </span>
            </h2>

            <p>
              A collection of digital wedding invitations
              crafted for couples who want their special
              moments to feel truly personal.
            </p>
          </div>
        </motion.div>


        {/* ========================================
            INVITATION GRID
        ======================================== */}

        <div className="invitation-showcase-grid">

          {invitations.map((invitation, index) => (

            <motion.article
              key={invitation.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="invitation-card"
            >

              {/* ========================================
                  LIVE INVITATION PREVIEW
              ======================================== */}

              <a
                href={invitation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="invitation-preview"
              >

                <div className="invitation-live-preview">
                  <iframe
                    src={invitation.link}
                    title={`${invitation.couple} Wedding Invitation`}
                    loading="lazy"
                  />
                </div>


                {/* Overlay */}

                <div className="invitation-preview-overlay">

                  <div className="invitation-preview-content">

                    <span className="invitation-preview-label">
                      Digital Invitation
                    </span>

                    <h3>
                      {invitation.couple}
                    </h3>

                    <p>
                      {invitation.type}
                    </p>

                  </div>


                  <div className="invitation-preview-arrow">
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                    />
                  </div>

                </div>

              </a>


              {/* ========================================
                  CARD INFORMATION
              ======================================== */}

              <div className="invitation-card-info">

                <div>
                  <h3>
                    {invitation.couple}
                  </h3>

                  <p>
                    {invitation.type}
                  </p>
                </div>

                <div className="invitation-card-date">
                  {invitation.date}
                </div>

              </div>


              {/* ========================================
                  VIEW INVITATION
              ======================================== */}

              <a
                href={invitation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="invitation-card-link"
              >
                <span>
                  View Invitation
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                />
              </a>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default InvitationShowcase;
