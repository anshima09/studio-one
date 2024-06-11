import React from "react";
import Navbar from "../Components/Navbar";
import Info from "../Components/Info";
import About from "../Components/About";
import Whystudio from "../Components/Whystudio";
import Contact from "../Components/Contact";
import Instructors from "../Components/Instructors";
import Footer from "../Components/Footer";
import Events from "../Components/Events";
import Batches from "../Components/Batches";
import Carousel from "../Components/Carousel";


function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Carousel/>
      <Info />
      <About />
      <Batches />
      <Instructors />
      <Whystudio/>
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
