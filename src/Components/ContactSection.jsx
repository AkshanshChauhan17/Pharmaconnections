import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

const ContactSection = () => {
  const socialLinks = [
    {
      id: "whatsapp",
      label: "Whatsapp",
      url: "https://api.whatsapp.com/send/?phone=8660877518",
      Icon: FaWhatsapp,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/pharma-connections-a-product-of-eduteq-connections-pvt-ltd/",
      Icon: FaLinkedin,
    },
    {
      id: "facebook",
      label: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100054235160581",
      Icon: FaFacebook,
    },
    {
      id: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/pharmaconnections/",
      Icon: FaInstagram,
    },
    {
      id: "youtube",
      label: "YouTube",
      url: "https://www.youtube.com/@PharmaConnections-hd5nh",
      Icon: FaYoutube,
    },
    {
      id: "twitter",
      label: "Twitter",
      url: "https://x.com/PharmaConn57380",
      Icon: FaTwitter,
    },
    {
      id: "google",
      label: "Google",
      url: "https://www.google.co.in/search?kgmid=/g/11kk40dfqg&hl=en-IN&q=Pharma+Connections+(A+Product+of+Eduteq+Connections+Pvt+Ltd)",
      Icon: FaGoogle,
    },
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-form-column">
          <h2 className="contact-title">Get in Touch</h2>
          <form
            className="contact-form"
            method="POST"
            aria-label="Contact Form"
          >
            <fieldset>
              <legend className="sr-only">Contact Form Demo</legend>

              <label htmlFor="fullName" className="form-label">
                Full Name{" "}
                <span aria-hidden="true" className="required">
                  *
                </span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Name"
                required
                className="form-input"
              />

              <label htmlFor="email" className="form-label">
                Email{" "}
                <span aria-hidden="true" className="required">
                  *
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="form-input"
              />

              <label htmlFor="phone" className="form-label">
                Phone{" "}
                <span aria-hidden="true" className="required">
                  *
                </span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                pattern="[0-9+().\- ]+"
                title="Only numbers and phone characters (+, -, (, ), .) are accepted."
                required
                className="form-input"
              />

              <label htmlFor="course" className="form-label">
                Course Offering{" "}
                <span aria-hidden="true" className="required">
                  *
                </span>
              </label>
              <select
                id="course"
                name="course"
                required
                className="form-select"
              >
                <option value="">- Select Course -</option>
                <option value="Computer System Validation">
                  Computer System Validation
                </option>
                <option value="Clinical Trials & Research">
                  Clinical Trials & Research
                </option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="Pharmacovigilance">Pharmacovigilance</option>
                <option value="Quality Management System">
                  Quality Management System
                </option>
                <option value="Soft Skills & Career Building">
                  Soft Skills & Career Building
                </option>
              </select>

              <label htmlFor="message" className="form-label">
                Message{" "}
                <span aria-hidden="true" className="required">
                  *
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="4"
                required
                className="form-textarea"
              ></textarea>

              <button type="submit" className="btn-submit">
                Submit Form
              </button>
            </fieldset>
          </form>
        </div>

        <div className="contact-info-column">
          <img
            src="https://pharmaconnections.in/wp-content/uploads/2024/09/contact-image-1.png"
            alt="Contact Us"
            className="contact-image"
            loading="lazy"
            width="522"
            height="617"
          />

          <div className="contact-details">
            <div className="info-box">
              <i className="icon icon-map-marker" aria-hidden="true"></i>
              <div>
                <h3>Our Location</h3>
                <p>
                  Pharma Connections (A Product of Eduteq Connections Pvt Ltd)
                  <br />
                  50/51-4, NS Palya, BTM Layout, 2nd Stage, Bengaluru, Karnataka
                  560076
                </p>
              </div>
            </div>

            <div className="info-box">
              <i className="icon icon-envelope1" aria-hidden="true"></i>
              <div>
                <h3>Quick Contact</h3>
                <p>Email: info@pharmaconnections.in</p>
              </div>
            </div>

            <div className="info-box">
              <i className="icon icon-phone1" aria-hidden="true"></i>
              <div>
                <h3>Phone Number</h3>
                <p>+91 - 86608 77518</p>
              </div>
            </div>

            <h2 className="follow-us-title">Follow us</h2>

            <ul className="social-links" aria-label="Social media links">
              {socialLinks.map(({ id, label, url, Icon }) => (
                <li key={id}>
                  <a
                    href={url}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
