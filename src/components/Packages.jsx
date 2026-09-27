import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";

const packages = [
  {
    name: "Essential",
    description:
      "A beautiful digital invitation for couples who want something simple and elegant.",
    price: "৳4,500",
    features: [
      "Custom wedding invitation website",
      "Couple names & wedding details",
      "Event schedule",
      "Venue & Google Maps",
      "Countdown timer",
      "Mobile responsive design",
    ],
  },
  {
    name: "Signature",
    description:
      "Our complete wedding experience, designed to make every detail feel personal.",
    price: "৳7,500",
    featured: true,
    features: [
      "Everything in Essential",
      "Premium custom design",
      "Photo gallery",
      "RSVP section",
      "Multiple wedding events",
      "Custom animations & interactions",
      "Music integration",
    ],
  },
  {
    name: "Luxe",
    description:
      "A fully bespoke digital wedding experience created around your story.",
    price: "Custom",
    features: [
      "Everything in Signature",
      "Fully custom visual direction",
      "Advanced interactions",
      "Personalized sections",
      "Premium typography & motion",
      "Priority design support",
      "Custom domain setup",
    ],
  },
];

function Packages() {
  return (
    <section id="packages" className="packages-section">
      <div className="packages-container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="packages-header"
        >
          <div className="packages-label">
            <span className="packages-dot" />
            <span>Packages</span>
          </div>

          <div className="packages-heading">
            <h2 className="font-display">
              Choose how you want
              <br />
              <span>your story to unfold.</span>
            </h2>

            <p>
              Thoughtfully designed digital invitation
              experiences for every kind of celebration.
            </p>
          </div>
        </motion.div>

        {/* PACKAGE GRID */}
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className={`package-card ${
                pkg.featured ? "package-card-featured" : ""
              }`}
            >
              {/* POPULAR BADGE */}
              {pkg.featured && (
                <div className="package-popular">
                  Most Popular
                </div>
              )}

              {/* TOP */}
              <div className="package-top">
                <span className="package-number">
                  0{index + 1}
                </span>

                <h3>{pkg.name}</h3>

                <p>{pkg.description}</p>
              </div>

              {/* PRICE */}
              <div className="package-price">
                <span className="package-price-value">
                  {pkg.price}
                </span>

                {pkg.price !== "Custom" && (
                  <span className="package-price-note">
                    starting from
                  </span>
                )}
              </div>

              {/* DIVIDER */}
              <div className="package-divider" />

              {/* FEATURES */}
              <ul className="package-features">
                {pkg.features.map((feature) => (
                  <li key={feature}>
                    <span className="package-check">
                      <Check
                        size={13}
                        strokeWidth={1.8}
                      />
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="package-button"
              >
                <span>
                  {pkg.featured
                    ? "Choose Signature"
                    : "Get Started"}
                </span>

                <ArrowUpRight
                  size={17}
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

export default Packages;