import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-column brand-column">
          <img className="footer-logo" src="/Furever Logo.jpg" alt="" />
          <a href="#" className="footer-brand">
            FurEver Care
          </a>
        </div>

        <div className="footer-column">
          <h4 className="column-heading">Company</h4>
          <div className="footer-company">
            <p>
              Email:&ebsn
              <a href="mailto:kelvinkokorie@gmail.com">FurEvercare@gmail.com</a>
            </p>
            <p>
              Phone: <a href="tel:+2349036728132">+2349036728132</a>
            </p>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="column-heading">Follow Us</h4>
          <ul className="social-icons">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
