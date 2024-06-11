import React from "react";
import "../Styles/Contact.css";
import { MdOutlineEmail } from 'react-icons/md';

function Reviews() {


  return (
    <div className="contact-section" id="reviews">
      <div className="contact-text-content">
        <p className="contact-title">
         <span>Reach Us</span>
        </p>

        
        <p className="contact-text-number">
          Mobile Number : +917067067573 | +917566695280
        </p>
        <p className="contact-text-addr">
          Address : Studio O.N.E, Infront of DCB bank, Shivaji Nagar, Moti Bunglow, Dewas, Madhya Pradesh 455001
        </p>
        <p><MdOutlineEmail className="contact-text-desc"/></p>
        <p className="contact-text-format">
          Email
        </p>
        <p className="contact-text-email">
        studio.ofnewera@gmail.com
        </p>
        <a className="message" href="mailto:anshima0906s@gmail.com">Send a message</a>
        <p className="register">For Registration : <a href="https://forms.gle/QrAmXYQJqPmmVQE89">CLICK HERE</a></p>
      </div>
    </div>
  );
}

export default Reviews;
