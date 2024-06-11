import React from "react";
import "../Styles/Whystudio.css";


function BookAppointment() {
  return (
    <div className="ba-section">
      {/* <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div> */}

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Studio One</span>
        </h3>
        <p className="ba-description">

          <span> Friendly Environment: </span>  Our welcoming atmosphere ensures that every student feels comfortable and encouraged. <br />
          <span>Expert Instructors:</span> Our experienced and passionate teachers are dedicated to helping you or your child. <br />
          <span>Beginner-Friendly: </span> Our beginner classes are tailored to introduce the basics of dance in a easy-to-follow manner. <br />
          <span>Wide Range of Styles: </span>We offer a diverse selection of classes to suit every interest and age group. <br />
          <span>Semi-Classical and Weekend Batches:</span>Explore the elegance of semi-classical dance in our specialized batches. <br />
          <span>Flexible Schedule: </span>Enjoy the convenience of our weekend classes.
          <span>Video Shoots and Social Media Exposure: </span>We shoot videos every week for social media, helping students learn to face the camera confidently. <br /> <br />
          <br /> 

          <span style={{ color: '#f39e30', fontSize: '25px' }}> Join Us Today ! </span><br />
          Discover the joy of dance at Studio One. Enroll in our classes today and embark on a journey of movement, music, and fun. We can't wait to dance with you!
        </p>
      </div>
    </div>
  );
}

export default BookAppointment;
