// components/Property.js
import React from "react";
import hotel1 from "../Parvatiwoods/Hotel services/Brahmaputra-River-Rafting-Assam-31.jpg";
import hotel2 from "../Parvatiwoods/Hotel services/slider3.jpg";
import hotel3 from "../Parvatiwoods/Hotel services/trekking_banner.jpg";
import "../styles/Services.css"; // Import CSS file for styling
import Footer from "./Footer";

const Services = () => {
  return (
    <>
      <section className="property-slider">
        {/* Wrapper for the sliding content */}
        <div class="sliderp">
          <div class="slides">
            <div  className="divcon">
              <img src={hotel1}></img>
              <div class="content">
                <h1>River Rafting</h1>
                <p>
                  "Get Ready for an unforgettable adventure? River rafting
                  offers thrill and nature's beauty, whether a novice or
                  experienced adventurer."
                </p>
              </div>
            </div>
            <div  className="divcon">
              <img src={hotel2}></img>
              <div class="content">
                <h1>Cab services</h1>
                <p>
                  Start or end your journey stress-free with our airport
                  transfer services. Our professional drivers will ensure you
                  reach your destination on time, every time.
                </p>
              </div>
            </div>
            <div className="divcon">
              <img src={hotel3}></img>
              <div class="content">
                <h1>Treaking</h1>
                <p>
                  "Welcome to Trekking Adventures! Explore unforgettable outdoor
                  experiences with treks for every expertise level, from
                  seasoned hikers to novices."
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Services;
