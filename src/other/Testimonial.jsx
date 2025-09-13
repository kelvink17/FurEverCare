import "./Testimonial.css";
import { useEffect } from "react";

function Testimonial() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  },[]);

  return (
    <div className="testimonial-section">
      <p className="testimonial-title">Testimonial</p>
      <h2 className="testimonial-heading">What people say about us</h2>
      <div className="testimonial-content">
        <div className="testimonial-left">
          <div className="stars">
            <span role="img" aria-label="star">
              ⭐
            </span>
            <span role="img" aria-label="star">
              ⭐
            </span>
            <span role="img" aria-label="star">
              ⭐
            </span>
            <span role="img" aria-label="star">
              ⭐
            </span>
            <span role="img" aria-label="star">
              ⭐
            </span>
          </div>
          <p className="testimonial-text">
            Finding a single place to manage all my pets needs used to be a
            headache. FurEver Care changed all that. From health tips to finding
            the perfect products, everything is so easy and organized. Its truly
            a game-changer for any pet owner.
          </p>
          <div className="testimonial-nav">
            <p className="testimonial-author">
              Gerald Ferguson <span className="author-role">Customer</span>
            </p>
          </div>
        </div>
        <div className="testimonial-right">
          <div className="testimonial-image-circle"></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
