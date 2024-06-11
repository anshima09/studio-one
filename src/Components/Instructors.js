import React from "react";
import InstructorsCard from "./InstructorsCard";
import TB from "../Assets/TB.png";
import AB from "../Assets/AB.jpeg";
import UD from "../Assets/UD.jpeg";
import SP from "../Assets/SP.jpg";
import "../Styles/Instructors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Instructors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of Instructors, dedicated to guide you through your dance journey. 
          No matter which batch you choose, you’ll be learning from the best.
        </p>
      </div>

      <div className="dt-cards-content">
        <InstructorsCard
          img={TB}
          name="Tarun Bairagi"
          title="Western and Classical Form"
          years="10+ years of experience"
          id="https://www.instagram.com/tarunn_bairagi"
        />
        <InstructorsCard
          img={AB}
          name="Abhishek Sharma"
          title="Western Form"
          years="5+ years of experience"
          id="https://www.instagram.com/abhishekk._sharma"
        />
        <InstructorsCard
          img={UD}
          name="Uddhav Dange"
          title="Western Form"
          years="10+ years of experience"
          id="https://www.instagram.com/uddhavdange"
        />
        <InstructorsCard
          img={SP}
          name="Shruti Palecha"
          title="Classical and Western Form"
          years="8+ years of experience"
          id="https://www.instagram.com/shrutim.palecha"
        />
      </div>
    </div>
  );
}

export default Doctors;
