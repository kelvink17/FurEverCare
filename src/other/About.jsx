"use client";

import "../other/About.css";
import Testimonial from "./Testimonial";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import Footer from "./Footer";

function App() {
  const { user } = useContext(UserContext);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="avet" style={{ marginTop: "40px" }}>
        {user ? `Welcome, ${user.name}` : "Welcome"}
         <div>Pet: {user.petName}</div>
      </div>

      <div className="floating-icons">
        <span className="paw-icon">🐾</span>
        <span className="paw-icon">🐾</span>
        <span className="paw-icon">🐾</span>
        <span className="paw-icon">🐾</span>
        <span className="paw-icon">🐾</span>
      </div>
      <div className="header">
        <div className="headerDesc">
          <p>Welcome to FurEver Care</p>
          <p>
            Your Trusted Companion for All Things Pet Care. They Deserve Forever
            Love
          </p>
          <Link to="/product" className="headerBtn">
            Shop Now
          </Link>
        </div>
        <div className="headerImg">
          <img src="/Petlogo.jpg" alt="A dog logo" />
        </div>
      </div>
      <div className="aboutBgColor">
        <div className="aboutStore">
          <p className="aboutHeader">About FurEver Care</p>
          <p className="aboutDesc">
            In today's fast-paced world, pet owners face difficulties in
            organizing pet care activities such as feeding schedules, grooming
            routines, health monitoring, and product selection. Additionally,
            navigating different websites for pet products such as food, toys,
            and grooming essentials can be inconvenient.
          </p>
          <div className="aboutStats">
            <div className="aboutStatsFlex">
              <p className="aboutStatsNum">3k+</p>
              <p className="aboutStatsDesc">Happy Clients</p>
            </div>
            <div className="aboutStatsFlex">
              <p className="aboutStatsNum">1.5k+</p>
              <p className="aboutStatsDesc">Products</p>
            </div>
            <div className="aboutStatsFlex">
              <p className="aboutStatsNum">21</p>
              <p className="aboutStatsDesc">Years in business</p>
            </div>
            <div className="aboutStatsFlex">
              <p className="aboutStatsNum">85</p>
              <p className="aboutStatsDesc">Brands</p>
            </div>
          </div>
          <Testimonial />
          <p className="ourteamHeader" id="ourt">
            Meet Our Team
          </p>
          <div className="ourteam">
            <div className="teamMembers">
              <img
                className="teamMemberImg"
                src="/moniye.jpg"
                alt="Team Member Image"
              />
              <div className="teamMemberDetails">
                <p className="teamMemberName">ADENIYI MONIYENINUOLUWA</p>
                <p className="teamMemberAbout">
                  Responsible for the overall user interface and user experience
                  design of the website, ensuring a clean and intuitive layout
                  for all users.
                </p>
              </div>
            </div>
            <div className="teamMembers">
              <img
                className="teamMemberImg"
                src="/Steve.jpg"
                alt="Team Member Image"
              />
              <div className="teamMemberDetails">
                <p className="teamMemberName">GABRIEL OLAGOKE STEPHEN</p>
                <p className="teamMemberAbout">
                  Developed the responsive layouts and animations, including the
                  floating paw icons and interactive button hover effects, to
                  create an engaging user experience.
                </p>
              </div>
            </div>
            <div className="teamMembers">
              <img
                className="teamMemberImg"
                src="/IFY.jpg"
                alt="Team Member Image"
              />
              <div className="teamMemberDetails">
                <p className="teamMemberName">STACEY IFEANYICHUKWU OKOLIE</p>
                <p className="teamMemberAbout">
                  Worked on integrating all components to ensure a seamless flow
                  and was responsible for creating the comprehensive project
                  report and documentation.
                </p>
              </div>
            </div>
            <div className="teamMembers">
              <img
                className="teamMemberImg"
                src="/KelvinK.jpg"
                alt="Team Member Image"
              />
              <div className="teamMemberDetails">
                <p className="teamMemberName">OKORIE IROH KELVINK</p>
                <p className="teamMemberAbout">
                  Coded the client-side functionality for features like the user
                  category selection, pet profiles, and the testimonial section.
                </p>
              </div>
            </div>

            <div className="teamMembers">
              <img
                className="teamMemberImg"
                src="/Mandrixx.jpg"
                alt="Team Member Image"
              />
              <div className="teamMemberDetails">
                <p className="teamMemberName">OKUNOILA ABDUMALEEK AYOMIDE</p>
                <p className="teamMemberAbout">
                  Handled the retrieval of all data from JSON/TXT files and
                  implemented the dynamic display of content, such as the pet
                  product showcase and category listings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
