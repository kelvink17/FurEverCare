// import Sidebar from "./Sidebar";
import "../other/Emergency.css";
import { useEffect } from "react";
import Footer from "./Footer"

export default function EmergencyVet() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="vet">
        {/* <Sidebar /> */}
        <div className="main2">
          <div className="wvet">Emergency & Vet Help</div>

          <div className="main3-container">
            <div className="main3">
              <div className="head">Vet Contacts</div>
              <ul className="history-list">
                <li className="hh">
                  Phone Dr. Smith's Clinic: +234 903 678 123
                </li>
                <li className="hh">Phone Animal Hospital: +234 903 678 123</li>
                <li className="hh">Phone City Pet Care: +234 903 678 123</li>
              </ul>
            </div>

            <div className="history-card">
              <div className="head">Poisons & Helplines</div>
              <ul className="history-list">
                <li className="hh">Pet Poisons Helpline: +234 903 678 123</li>
                <li className="hh">Pet Ambulance: +234 903 678 123</li>
                <li className="hh">ASPCA Helpline: +234 903 678 123</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mainn">
          <div className="head2">Contact Us</div>
          <div className="cdata">
            <div className="run">
              <div className="data-wrapper">
                <div>Location</div>
                <div className="data-info">
                  <div className="data-day">Location</div>
                  <div className="data-time">
                    123 Pet Street, Animal City, PA
                  </div>
                </div>
              </div>
            </div>
            <div className="run">
              <div className="data-wrapper">
                <div>Email</div>
                <div className="data-info">
                  <div className="data-day">Email</div>
                  <div className="data-time">kelvinkokorie@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="run">
              <div className="data-wrapper">
                <div>Phone</div>
                <div className="data-info">
                  <div className="data-day">Phone</div>
                  <div className="data-time">+234 903 678 123</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
