/* eslint-disable jsx-a11y/img-redundant-alt */
// components/Home.js
import React from "react";
import { useState, useEffect } from "react";
import "../styles/Home.css";
import Slider from "./Slider";
import { Helmet } from "react-helmet";

import home1 from "../Parvatiwoods/Home page slides/home1.jpg";
import home2 from "../Parvatiwoods/Home page slides/home2.jpg";
import home3 from "../Parvatiwoods/Home page slides/home3.jpg";

import home5 from "../Parvatiwoods/Home page slides/home5.jpg";

import home7 from "../Parvatiwoods/Home page slides/home7.jpg";

import Footer from "./Footer";

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

let h1= "https://res.cloudinary.com/dl2zoh4zs/image/upload/v1712696198/rohtang_tpj5rq.jpg";
let h2= "https://res.cloudinary.com/dl2zoh4zs/image/upload/v1712696198/rohtang_tpj5rq.jpg";
let h3= "https://res.cloudinary.com/dl2zoh4zs/image/upload/v1712696198/rohtang_tpj5rq.jpg";

  const images = [home1, home2, home3, home5, home7];
  const img1 = [h1,h2,h3];
  const img2= [h1,h2,h3];
  const img3 = [h1,h2,h3];



  
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
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <>
      <Helmet>
        <title>ParvatiWoods-Home</title>
        <meta
          name="description"
          content="Welcome to Your Website Name. Discover our amazing services and book your stay with us."
        />
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
                className={index === currentImage ? "bullet active" : "bullet"}
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

        <div className="content">
          <div className="just_content">
            <h1>About Parvatiwoods</h1>

            <div className="roomcontainer">
              <div className="imageslider">
              <Slider images = {img1}></Slider>
              </div>

              <div className="roomcontent">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci quis placeat aspernatur voluptas sapiente nobis,
                  rerum explicabo libero impedit porro.
                </p>
              </div>
            </div>

            <div className="roomcontainer">
              <div className="roomcontent">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci quis placeat aspernatur voluptas sapiente nobis,
                  rerum explicabo libero impedit porro.
                </p>
              </div>

              <div className="imageslider">
              <Slider images = {img1}></Slider>
              </div>
            </div>

            <div className="roomcontainer">
              <div className="imageslider">
              <Slider images = {img1}></Slider>
              </div>

              <div className="roomcontent">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci quis placeat aspernatur voluptas sapiente nobis,
                  rerum explicabo libero impedit porro.
                </p>
              </div>
            </div>

            <p>
              These are deluxe lodgings, which are more sophisticated and roomy
              than economical accommodations. At one of the finest deluxe hotels
              in Manali, each room is furnished with contemporary conveniences
              such as a private bathroom featuring a shower, cable television,
              and everything else you could possibly need for the most
              comfortable stay possible.
            </p>
            <button>
              <a href="/book-room">Book Now</a>
            </button>
          </div>
        </div>

        <div class="midcontent">
          <h1>Near Locations To Explore</h1>
          <div className="allimg">
            <div class="image-wrapper">
              <img
                src="https://res.cloudinary.com/dl2zoh4zs/image/upload/v1712696198/rohtang_tpj5rq.jpg"
                alt="Image 1"
                class="small-image"
              ></img>
              <p>Rohtang Pass</p>
            </div>
            <div class="image-wrapper">
              <img
                src="https://res.cloudinary.com/dl2zoh4zs/image/upload/t_ c/v1712696511/pexels-pravin-kannah-photography-14572855_qwaide.jpg"
                alt="Image 2"
                class="small-image"
              ></img>
              <p>Solang Valley</p>
            </div>

            <div class="image-wrapper">
              <img
                src="https://res.cloudinary.com/dl2zoh4zs/image/upload/c_crop,w_3024,h_4032/v1712697499/pexels-iamash-17118365_llfipb.jpg"
                alt="Image 3"
                class="small-image"
              ></img>
              <p>Old Manali</p>
            </div>
          </div>
        </div>

        <div className="midcontent2">
          <h1>Reach Us At</h1>
          <p>Suma Ropa,Kasol,Kullu,Himachal Pradesh,India</p>
          <p>Ujjwal (Owner): 9418016518</p>
          <p>Gaurav : 8219951117</p>
          <p>Pankaj : 9459900143</p>
          <button>
            <a href="/contact">Enquiry now</a>
          </button>
        </div>

        {/*



        


        
       
       
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
          
       */}
      </section>
      <Footer></Footer>
    </>
  );
};

export default Home;
