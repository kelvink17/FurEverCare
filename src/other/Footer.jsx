import "./Footer.css";

const Footer = ({ visitorCount }) => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-column brand-column">
          <img className="footer-logo" src="/Furever Logo.jpg" alt="FurEver Care Logo" />
          <a href="#" className="footer-brand">
            FurEver Care
          </a>
        </div>

        <div className="footer-column">
          <h4 className="column-heading">Company</h4>
          <div className="footer-company">
            <p>
              Email: <a href="mailto:FurEvercare@gmail.com">FurEvercare@gmail.com</a>
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
              <a href="https://www.facebook.com" aria-label="Facebook Page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.542-1.333h2.458v-5h-3.4c-4.145 0-5.6 3.654-5.6 5.75v2.25z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" aria-label="Instagram Page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.068 1.645.068 4.85s-.01 3.584-.068 4.85c-.148 3.228-1.667 4.772-4.919 4.919-1.266.058-1.646.068-4.85.068s-3.584-.01-4.85-.068c-3.252-.148-4.771-1.692-4.919-4.919-.058-1.265-.068-1.645-.068-4.85s.01-3.584.068-4.85c.148-3.227 1.667-4.771 4.919-4.919 1.266-.058 1.646-.068 4.85-.068zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.201-6.78 2.623-6.981 6.981-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.201 4.357 2.623 6.78 6.981 6.981 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.354-.201 6.782-2.623 6.981-6.981.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.199-4.357-2.623-6.78-6.981-6.981-1.279-.058-1.687-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" aria-label="X (Twitter) Page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.895-.959-2.173-1.559-3.591-1.559-3.411 0-6.178 2.76-6.178 6.179 0 .484.055.955.162 1.404-5.145-.258-9.692-2.728-12.742-6.49-.533.917-.847 1.986-.847 3.137 0 2.144 1.096 4.045 2.766 5.15-1.018-.032-1.97-.311-2.809-.775v.079c0 2.984 2.127 5.474 4.941 6.049-.516.131-1.065.196-1.628.196-.391 0-.773-.038-1.144-.109.782 2.45 3.056 4.237 5.762 4.288-2.09.2-4.184.316-6.275.316-1.104 0-2.193-.066-3.275-.195 2.695 1.731 5.88 2.748 9.387 2.748 11.266 0 17.411-9.319 17.411-17.411 0-.265-.007-.529-.015-.791.954-.694 1.789-1.562 2.457-2.549z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="visitor-counter">
          <p>This website has been visited {visitorCount} times this session.</p>
        </div>
      <div className="copyright-container">
        <p>&copy; {new Date().getFullYear()} Galacticode. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;