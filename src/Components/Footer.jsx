const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column about">
          <a href="https://pharmaconnections.in" target="_blank" rel="noreferrer">
            <img
              src="https://pharmaconnections.in/wp-content/uploads/2021/11/WhatsApp-Image-2024-08-31-at-04.34.55-1-1-removebg-preview.png"
              alt="Pharma Connections"
              className="footer-logo"
            />
          </a>
        </div>

        <div className="footer-column links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="https://pharmaconnections.in/">Home</a></li>
            <li><a href="https://pharmaconnections.in/about-us/">About Us</a></li>
            <li><a href="https://pharmaconnections.in/ourservices/">Our Services</a></li>
            <li><a href="https://pharmaconnections.in/accreditations/">Accreditations</a></li>
            <li><a href="https://pharmaconnections.in/blog/">Blogs & Articles</a></li>
            <li><a href="https://pharmaconnections.in/contact-us/">Contact Us</a></li>
            <li><a href="https://pharmaconnections.in/sitemap/">Sitemap</a></li>
          </ul>
        </div>

        <div className="footer-column contact">
          <h2>Get In Touch</h2>
          <h3>Address</h3>
          <p>Pharma Connections (A Product of Eduteq Connections Pvt Ltd)</p>
          <p>50/51-4, NS Palya, BTM Layout, 2nd Stage,</p>
          <p>Bengaluru, Karnataka 560076</p>
          <div className="contact-info">
            <p><strong>Phone:</strong> <a href="tel:+918660877518">+91 86608-77518</a></p>
            <p><strong>Mail Us:</strong> <a href="mailto:info@pharmaconnections.in">info@pharmaconnections.in</a></p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Pharma Connections. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="https://pharmaconnections.in/terms-of-use/" target="_blank" rel="noreferrer">Terms Of Use</a>
          <span>|</span>
          <a href="https://pharmaconnections.in/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;