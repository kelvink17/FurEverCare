import "../other/Feedback.css";
// import Sidebar from "./Sidebar";
import { useEffect } from "react";
export default function Feedback() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="feedback">
      {/* <Sidebar /> */}
      <form className="feedback-form" action="">
        <img src="/Furever Logo.jpg" alt="" className="imgs" />
        <div className="form-title">Furever Care</div>
        <div className="form-title">Feedback</div>
        <div className="form-group">
          <label htmlFor="name" className="nmcont">
            <span className="label-text">Name:</span>
            <input
              type="text"
              id="name"
              className="fbname"
              placeholder="Enter Name"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="emcont">
            <span className="label-text">Email:</span>
            <input
              type="mail"
              id="email"
              className="fbemail"
              placeholder="Enter Email"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="feedback" className="fbcont">
            <span className="label-text">Feedback:</span>
            <textarea
              name="feedback"
              id="feedback"
              className="feedbacktext"
              placeholder="Enter Feedback"
            ></textarea>
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
