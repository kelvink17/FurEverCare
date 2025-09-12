import { useState, useEffect } from "react";
import "../other/Contact.css";
import Footer from "./Footer"

const ContactUs = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Stacey Ifeanyichukwu Okolie",
      role: "Pet Care Specialist",
      email: "traceystacey0@gmail.com",
      phone: "+234 706 689 3339",
      image: "/female.jpg",
    },
    {
      id: 2,
      name: "Adeniyi Moniyenuoluwa",
      role: "Veterinary Consultant",
      email: " davidadeniyi269@gmail.com",
      phone: "+234 812 020 6167",
      image: "/moniye.jpg",
    },
    {
      id: 3,
      name: "Okunoila Abdulmaleek Ayomide",
      role: "Customer Success Manager",
      email: "okunolaabdulmaleek03@gmail.com",
      phone: "+234 808 652 9514",
      image: "/dude.jpg",
    },
    {
      id: 4,
      name: "Okorie Iroh Kelvink",
      role: "C. E. O.",
      email: "kelvinkokorie@gmail.com",
      phone: "+234 903 672 8132",
      image: "/kelvinking.jpg",
    },
    {
      id: 5,
      name: "Gabriel Olagoke Stephen",
      role: "Professional Feces Parking Expert ",
      email: "Stephengabriel123401@gmail.com",
      phone: "+234 906 048 2813",
      image: "/grumpy.jpg",
    },
  ];

  return (
    <div>
      <div className="contactmain">
        <section className="contact-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                <span className="title-word">Get</span>
                <span className="title-word">In</span>
                <span className="title-word">Touch</span>
              </h2>
              <br></br>
              <div className="clock">{time.toLocaleTimeString()}</div>
              <p className="section-subtitle">
                Have questions about our products or need personalized
                recommendations? Our expert team is here to help!
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-info">
                <div className="info-card">
                  <div className="info-icon">📍</div>
                  <h3>Visit Our Store</h3>
                  <p>
                    123 Pet Paradise Lane
                    <br />
                    Happy Valley, CA 90210
                  </p>
                </div>

                <div className="info-card">
                  <div className="info-icon">📞</div>
                  <h3>Call Us</h3>
                  <p>
                    +1 (555) PET-CARE
                    <br />
                    Mon-Fri: 9AM-6PM PST
                  </p>
                </div>

                <div className="info-card">
                  <div className="info-icon">✉️</div>
                  <h3>Email Us</h3>
                  <p>
                    hello@furevercare.com
                    <br />
                    We reply within 24 hours
                  </p>
                </div>

                <div className="info-card">
                  <div className="info-icon">🚚</div>
                  <h3>Free Shipping</h3>
                  <p>
                    On orders over $50
                    <br />
                    Fast & reliable delivery
                  </p>
                </div>
              </div>
              <br></br>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6087209167226!2d3.8882646!3d7.397663799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d6a657b14c9%3A0xb43849f101727e38!2sAptech%20Ibadan!5e0!3m2!1sen!2sng!4v1757514614361!5m2!1sen!2sng"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: "20px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FurEver Care Location"
                ></iframe>
              </div>
            </div>
            <div className="team-section">
              <h3 className="team-titles">Contact Our Expert Team</h3>
              <div className="team-grid">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className="team-member"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="member-image"
                    />
                    <div className="member-info">
                      <h4 className="member-name">{member.name}</h4>
                      <p className="member-role">{member.role}</p>
                      <div className="member-contact">
                        <a
                          href={`mailto:${member.email}`}
                          className="contact-link"
                        >
                          ✉️ {member.email}
                        </a>
                        <a
                          href={`tel:${member.phone}`}
                          className="contact-link"
                        >
                          📞 {member.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
