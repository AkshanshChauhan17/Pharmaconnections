const FounderNote = () => {
  return (
    <section className="founder-note">
      <div className="founder-note__container">
        <div className="founder-note__image-section">
          <div className="image-wrapper">
            <img
              src="https://pharmaconnections.in/wp-content/uploads/2024/08/doctor-touching-dna-structure-strain-helix-genetics-medical-science-human-dna-molecule-chain_326694-262363-e1724837717946.jpg"
              alt="DNA Medical Science"
              className="main-image"
            />
            <div className="experience-badge">
              <h2>10+ Years Of Experience</h2>
            </div>
          </div>
          <div className="pattern-image">
            <img
              src="https://pharmaconnections.in/wp-content/plugins/creote-addons//assets/images/pattern-n1.png"
              alt="Decorative Pattern"
            />
          </div>
        </div>

        <div className="founder-note__text-section">
          <h2 className="section-title">OUR FOUNDER'S NOTE</h2>
          <p>
            In the summer of 2015, after completing my master’s degree in Life
            Science, I embarked on a challenging journey in search of a job
            within the pharmaceutical industry. To my dismay, every single
            company I approached greeted me with rejection. This frustrating
            experience forced me to introspect and realize that something within
            me needed to change in order to break through this seemingly
            impenetrable barrier.
          </p>
          <p>
            After careful analysis and extensive research on the prevailing
            market conditions, I began to pinpoint the factors contributing to
            my numerous rejections. It was at this moment of clarity that I
            resolved to enhance my skillset to align with the current demands of
            the industry.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FounderNote;