import { useState, useEffect } from "react";
import "./Marquee.css";

const Marquee = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  const location = "189A, Modupe House, Fajuyi Road, Adamasingba, Ibadan, Oyo State, Nigeria"; 

  return (
    <div className="marquee-fixed-container">
      <div className="marquee-content">
        <span className="marquee-text">
          {location} | {currentTime}
        </span>
      </div>
    </div>
  );
};

export default Marquee;