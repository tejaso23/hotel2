// components/Property.js
import React from 'react';
import  hotel1 from "../Parvatiwoods/Hotel services/Brahmaputra-River-Rafting-Assam-31.jpg";
import  hotel2 from "../Parvatiwoods/Hotel services/slider3.jpg"
import  hotel3 from  "../Parvatiwoods/Hotel services/trekking_banner.jpg"
import '../styles/Property.css'; // Import CSS file for styling
import Footer from "./Footer"


const Property = () => {
  return (
    <>
      <section className="property-slider">
        {/* Wrapper for the sliding content */}
  <div class="sliderp">
  


  <div class="slides">
    <div id="slide-1">
      <img src={hotel1}></img>
      <h1>River Rafting</h1>
      <h1>River Rafting</h1>
      
    </div>
    <div id="slide-2">
    <img src={hotel2}></img>
    <h1>Snowy Mountains</h1>
    </div>
    <div id="slide-3">
    <img src={hotel3}></img>
    <h1>Treaking</h1>
    </div>
    
  </div>


  <a href="#slide-1"></a>
  <a href="#slide-2"></a>
  <a href="#slide-3"></a>
 
</div>
      </section>
    <Footer></Footer>  
    </>
  );
}

export default Property;
