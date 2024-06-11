import React from "react";
import aboutUs from "../Assets/aboutUs.png";
import "../Styles/About.css";
import { FaYoutube, FaInstagram } from 'react-icons/fa';



function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={aboutUs} alt="Instructor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          <span style={{fontSize:'30px'}}>Welcome to Studio One Dance Classes! </span><br />
          <br />
          At Studio One, we believe everyone has the potential to dance, and we are thrilled to invite
          beginners and kids to join our vibrant and supportive community. Whether your child is taking
          their first steps in dance or you're an adult looking to explore a new hobby, our classes are
          designed to make learning fun and accessible for everyone.
        </p>
        <div style={{ display: 'flex', gap: '7px', color:'black', fontSize:'40px' }}>
          
            <div>
            <a style={{color:'#f39e30'}} href="https://www.instagram.com/studio__o.n.e/"><FaInstagram /></a>
      
            </div>
          
          <div>
          <a style={{color:'#f39e30'}} href="https://www.youtube.com/@Studio_O.N.E"><FaYoutube /></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
