// components/Home.js
import React from 'react';
import { useState,useEffect } from 'react';
import '../styles/Home.css';
import { Helmet } from 'react-helmet';

import home1 from "../Parvatiwoods/Home page slides/home1.jpg";
import home2 from "../Parvatiwoods/Home page slides/home2.jpg";
import home3 from "../Parvatiwoods/Home page slides/home3.jpg";
import home4 from "../Parvatiwoods/Home page slides/home4.jpg";
import home5 from "../Parvatiwoods/Home page slides/home5.jpg";
import home6 from "../Parvatiwoods/Home page slides/home2.jpg";
import home7 from "../Parvatiwoods/Home page slides/home7.jpg";
import home8 from "../Parvatiwoods/Home page slides/home8.jpg";


const Home = () => {

/*  let home14 = "https://res.cloudinary.com/dxoejrovf/image/upload/v1711714849/kashmir-honeymoon-package-1000x1000_vmehn3.png";

  let home13 = "https://res.cloudinary.com/dxoejrovf/image/upload/v1711714836/Screenshot_2024-03-29_171630_cleanup_qlrtdw.png";

  let home11 = "https://res.cloudinary.com/dxoejrovf/image/upload/v1711713359/pexels-ashwini-chaudhary-2961109_uuigtp.jpg";

  let home6 = "https://res.cloudinary.com/dxoejrovf/image/upload/v1711713359/pexels-ashwini-chaudhary-2961109_uuigtp.jpg"

  let home5 = "https://res.cloudinary.com/dxoejrovf/image/upload/v1711714849/kashmir-honeymoon-package-1000x1000_vmehn3.png";

  let home2 = "https://res.cloudinary.com/dxoejrovf/image/upload/v1711714849/kashmir-honeymoon-package-1000x1000_vmehn3.png";

  let home1 = "https://res.cloudinary.com/dxoejrovf/image/upload/v1711714849/kashmir-honeymoon-package-1000x1000_vmehn3.png";

  let home12 = "https://res.cloudinary.com/dxoejrovf/image/upload/v1711714849/kashmir-honeymoon-package-1000x1000_vmehn3.png";

*/

 

  const images = [home1, home2, home3, home4, home5, home6,home7,home8];

  // State to track the index of the current image
  const [currentImage, setCurrentImage] = useState(0);

  // Function to handle sliding to the next image
  useEffect(() => {
    let interval;

    
    if (images[currentImage] === home1) {
      // If current image is home1, set interval to 10 seconds
      interval = setInterval(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      }, 9000); // 10-second interval
    } else {
      // For other images, set the default 5-second interval
      interval = setInterval(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // 5-second interval
    }

    

    return () => clearInterval(interval);
  }, [images.currentImage]);


  const goToNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };


  return (
    <>
    <Helmet>
        <title>ParvatiWoods-Home</title>
        <meta name="description" content="Welcome to Your Website Name. Discover our amazing services and book your stay with us." />
        {/* Add more meta tags as needed */}
      </Helmet>
    <section className="home">
    {/*
    <div className="image-container">
            <img src={home1} alt="Home Slide" > 
            </img>
        <div className="transparent-box">
          <h1 className='first'>Parvati Woods </h1><h1 className='second'>Cottage 97</h1>
       
          <h2>It's all about Location</h2>
        </div>
     </div>
    
    
    */}
    
    <div className="image-container">
      
          <img src={images[currentImage]} alt="Home Slide" />
           <h1>Welcome to the woods</h1>
          <div className="bullets">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentImage ? 'bullet active' : 'bullet'}
              onClick={() => goToImage(index)}
            ></span>
          ))}
        </div>
          
          
          <button className="nav-btn prev" onClick={goToPrevImage}>
            &lt;
          </button>
          {/* Image */}
          <img src={images[currentImage]} alt="Home Slide" />
          {/* Next Button */}
          <button className="nav-btn next" onClick={goToNextImage}>
            &gt;
          </button>
         
      </div>

    
    
     


      {/*<div className="content">
       <img src={home2} alt="Home Slide" > 
            </img>
        <div className='just_content'>
          <h1>Our Property</h1>
          <p>Vacationing doesn’t have to be a chore; it can be a pleasure. When we first opened Parvati Woods Cottage 97 in 2000, we understood that visitors to the San Francisco area were looking for a property that made them feel at home. If you are searching for a place that is impeccably designed and includes a range of top-notch facilities, you have come to the right place.</p>
          <button>Book Now</button>
        </div>
      </div> 



        <div className='midcontent'>
        <h1>What We Provide</h1>
          <p>At Parvati Woods Cottage 97 you’ll find all the amenities you need for an enjoyable, comfortable stay. We’ve made sure that all the important stuff, along with the little details, are taken care of. No need to overpack or worry. We’ve got you covered.</p>
          <img src={home3} alt= "img"></img>
        </div>


        <div className='midcontent'>
        <h1>Fully Furnished</h1>
          <p>Your comfort and convenience are our top priorities during your stay. We leave you with clear instructions and tips to help you make the most of everything the space has to offer, and we're always available to answer any questions you may have.</p>

          <img src={home4} alt= "img"></img>
        </div>
       
       
        <div  className='midcontent'>
        <h1>
        High-Speed Wi-Fi
        </h1>
          <p>Our guests love how simple it is to stay here. Parvati Woods Cottage 97 brings you all the comforts of a well-run home without any of the stresses of running it. From check-in to check-out and every moment in between, you can count on enjoying a smooth experience.</p>

          <img src={home5} alt= "img"></img>
        </div>
       
        <div  className='midcontent'>
         <h1>
         Climate Controlled
         </h1>
          <p>We work hard to make your stay perfect, so you can relax and enjoy from the moment you walk in the door. For as long as you're staying at Parvati Woods Cottage 97, you won't need to worry about a thing. If you have a question, we're always just a call away.</p>
        </div>


        <div className="content2">
       
       
         <div class="tt" >
           <img src={home6} alt="Home Slide" > 
            </img>
          </div>
         <div className='just_content2'>
           <h1>30 Day Guarantee</h1>
           <h2>Outstanding Quality</h2>
           <p>This is your Feature description. Write a short blurb explaining what the feature is and why it matters for visitors, customers or clients. Don’t be afraid to toot your own horn! Take this opportunity to emphasize the important benefits or key advantages.</p>
          </div>
         </div> 
          
       */
      }
      
    </section>
    
   
    </>
  );
}

export default Home;
