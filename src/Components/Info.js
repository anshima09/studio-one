import React from "react";
import "../Styles/Info.css";


function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>CHOOSE DANCE CHOOSE <span style={{color:'#f39e30'}}>STUDIO ONE</span></span>
        </h3>
        {/* <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p> */}
       <a className="register-btn" href="https://forms.gle/QrAmXYQJqPmmVQE89">Registration</a>
      </div>
      
      
    </div>
  );
}

export default Info;
