"use client";

import { useLocation } from "react-router-dom";
import "./Shelter.css";
import { Shelterdata } from "./Shelterdata";
import { useEffect } from "react";

export default function Shelter() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.substring(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="Smain">
      <header className="headerr">
        <div className="header-content">
          <h1 className="h1">Find Your New Best Friend</h1>
          <p>Every pet deserves a loving home. Adopt, don't shop!</p>
          <a href="#" className="cta-button">
            Adopt Now
          </a>
        </div>
      </header>
      <section className="about" id="about-shelter">
        <h2 className="section-titlee">About Our Shelter</h2>
        <div className="about-content">
          <p>
            We are dedicated to rescuing animals in need and finding them loving
            homes. Our mission is to provide a safe haven for abandoned and
            neglected pets and connect them with caring families. We offer a
            variety of services, including pet adoption, spay/neuter programs,
            and community education to create a better world for all animals.
          </p>
        </div>
      </section>
      <section className="animals" id="available-animals">
        <h2 className="section-titlee">Available Animals</h2>
        <div>
          <div className="map">
            {Shelterdata.map((items) => (
              <div className="each-map" key={items.id}>
                <div className="sectionTitle2">
                  <img
                    className="sectionTitle-grid"
                    src={items.image || "/placeholder.svg"}
                    alt={`${items.name} - ${items.breed}`}
                  />
                </div>
                <div className="animal-info">
                  <h3>{items.name}</h3>
                  <p>
                    {items.age}, {items.breed}
                  </p>
                  <a href="#" className="adopt-btn">
                    Adopt Me
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="events" id="events">
        <h2 className="section-titlee">Upcoming Events</h2>
        <div className="events-grid">
          <div className="event-card">
            <div className="event-date">
              <p>June 15, 2025</p>
              <p>10:00 AM - 2:00 PM</p>
            </div>
            <div className="event-content" id="evcon">
              <h3>Adoption Day</h3>
              <p>
                Join us for our monthly adoption event! Meet our adorable pets
                looking for forever homes. Special discounts on adoption fees.
              </p>
              <div className="event-details" id="edail">
                <span>
                  <i className="fas fa-map-marker-alt"></i> Main Shelter
                </span>
                <span>
                  <i className="fas fa-users"></i> 25 spots left
                </span>
              </div>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <p>June 22, 2025</p>
              <p>6:00 PM - 8:00 PM</p>
            </div>
            <div className="event-content">
              <h3>Volunteer Orientation</h3>
              <p>
                Interested in volunteering? Attend our orientation session to
                learn about how you can help animals in need.
              </p>
              <div className="event-details">
                <span>
                  <i className="fas fa-map-marker-alt"></i> Community Center
                </span>
                <span>
                  <i className="fas fa-users"></i> 15 spots left
                </span>
              </div>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <p>July 8, 2025</p>
              <p>11:00 AM - 3:00 PM</p>
            </div>
            <div className="event-content">
              <h3>Paws in the Park</h3>
              <p>
                Annual fundraiser walkathon. Bring your furry friends for a day
                of fun, games, and helping animals in need.
              </p>
              <div className="event-details">
                <span>
                  <i className="fas fa-map-marker-alt"></i> City Park
                </span>
                <span>
                  <i className="fas fa-users"></i> 100+ attending
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="success-stories" id="ss">
        <h2 className="section-titlee">Success Stories</h2>
        <div className="stories-grid">
          <div className="story-card">
            <div
              className="story-image"
              style={{ backgroundImage: "url('/images/sucessstorie 1.avif')" }}
            ></div>
            <div className="story-content">
              <h3>From Shelter to Loving Home</h3>
              <p>
                We adopted Bella last month and she has brought so much joy to
                our family. The adoption process was smooth and the staff was
                incredibly helpful.
              </p>
              <div className="story-author">
                <div
                  className="author-avatar"
                  style={{ backgroundImage: "url('/images/woman2.avif')" }}
                ></div>
                <div>
                  <strong>Sarah Johnson</strong>
                  <p>Adopted: Bella</p>
                </div>
              </div>
            </div>
          </div>

          <div className="story-card">
            <div
              className="story-image"
              style={{ backgroundImage: "url('/images/successstorie2.avif')" }}
            ></div>
            <div className="story-content">
              <h3>Best Decision Ever</h3>
              <p>
                After losing our previous dog, we were not sure we were ready.
                But when we met Charlie at the shelter, we knew he was meant to
                be part of our family.
              </p>
              <div className="story-author">
                <div
                  className="author-avatar"
                  style={{ backgroundImage: "url('/images/manface.avif')" }}
                ></div>
                <div>
                  <strong>Michael Thompson</strong>
                  <p>Adopted: Charlie</p>
                </div>
              </div>
            </div>
          </div>

          <div className="story-card">
            <div
              className="story-image"
              style={{ backgroundImage: "url('/images/successstorie3.avif')" }}
            ></div>
            <div className="story-content">
              <h3>Perfect Companion</h3>
              <p>
                As a senior living alone, Whiskers has been the perfect
                companion. She is affectionate, playful, and has brought new
                energy into my home.
              </p>
              <div className="story-author">
                <div
                  className="author-avatar"
                  style={{ backgroundImage: "url('/images/woman.webp')" }}
                ></div>
                <div>
                  <strong>Shakir Khadijah</strong>
                  <p>Adopted: Whiskers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="get-involved" id="gi">
        <h2 className="section-titlee">Get Involved</h2>
        <center>
          <p className="about-content">
            There are many ways you can help. Learn more about how to contribute
            to our mission of saving and caring for animals in need.
          </p>
        </center>

        <div className="involved-grid">
          <div className="involved-card">
            <i className="fas fa-hands-helping"></i>
            <h3>Volunteer</h3>
            <p>
              Join our team of dedicated volunteers and make a difference in the
              lives of animals who need your care and compassion.
            </p>
            <a href="#" className="involved-btn">
              Learn More
            </a>
          </div>

          <div className="involved-card">
            <i className="fas fa-home"></i>
            <h3>Foster</h3>
            <p>
              Provide a temporary home for animals in need while they wait for
              their forever families. Your love makes all the difference.
            </p>
            <a href="#" className="involved-btn">
              Learn More
            </a>
          </div>

          <div className="involved-card">
            <i className="fas fa-donate"></i>
            <h3>Donate</h3>
            <p>
              Your financial support helps us provide care, food, and medical
              treatment for our animals. Every donation counts.
            </p>
            <a href="#" className="involved-btn">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
