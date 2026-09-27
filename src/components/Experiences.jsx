import { ArrowUpRight } from "lucide-react";

function Experiences() {
  const experiences = [
    {
      number: "01",
      title: "A story worth remembering",
      text: "Your invitation should feel like the beginning of the celebration — personal, elegant, and completely yours.",
      tag: "PERSONAL",
    },
    {
      number: "02",
      title: "Designed around you",
      text: "From typography and colors to motion and details, every element is carefully shaped around your wedding.",
      tag: "CURATED",
    },
    {
      number: "03",
      title: "More than an invitation",
      text: "A beautiful digital experience your guests can explore, revisit, and remember long after the celebration.",
      tag: "EXPERIENCE",
    },
  ];

  return (
    <section
      id="experiences"
      className="experience-section"
    >
      <div className="experience-container">

        {/* HEADER */}

        <div className="experience-header">

          <div className="experience-label">
            <span className="experience-dot" />

            <span>
              The Experience
            </span>
          </div>


          <div className="experience-heading-wrap">

            <h2>
              Not just an invitation.
              <br />

              <span>
                An experience.
              </span>
            </h2>


            <p>
              Every wedding has a story. We turn yours
              into a digital experience that feels personal,
              beautiful, and unforgettable.
            </p>

          </div>

        </div>


        {/* CARDS */}

        <div className="experience-grid">

          {experiences.map((item) => (
            <article
              className="experience-card"
              key={item.number}
            >

              <div className="experience-card-top">

                <span className="experience-number">
                  {item.number}
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                />

              </div>


              <div className="experience-card-content">

                <span className="experience-tag">
                  {item.tag}
                </span>


                <h3>
                  {item.title}
                </h3>


                <p>
                  {item.text}
                </p>

              </div>

            </article>
          ))}

        </div>


        {/* BOTTOM STATEMENT */}

        <div className="experience-bottom">

          <span>
            01 — 03
          </span>

          <p>
            Thoughtfully designed from the first
            impression to the final detail.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Experiences;