import React from "react";
import "../App.css";

const ServiceUnavailable = () => {
  return (
    <div className="service-unavailable">
      <div className="unavailable-card">

       

        <h1>Service Not Available</h1>

        <p>
          Sorry, we currently don't have any verified cooks or
          maids in your area.
        </p>

       

        <div className="action-buttons">
          <button className="notify-btn">
            Notify Me
          </button>

          <button className="change-btn">
            Change Location
          </button>
        </div>

        <div className="features">
          <p>✓ Expanding to new areas every week</p>
          <p>✓ Join waitlist for priority access</p>
        </div>

      </div>
    </div>
  );
};

export default ServiceUnavailable;