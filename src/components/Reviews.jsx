import React, { useState } from 'react';
import '../styles/Reviews.css';
import Footer from './Footer';
import { Helmet } from 'react-helmet';



const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      author: 'Sahil Singh',
      text: 'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice.'
    },
    {
      id: 2,
      author: 'Rishab Sharma',
      text: 'The stay was lovely, loved the breakfast which was included. The place was clean and very comfortable Enjoyed the stay.'
    },
    {
      id: 3,
      author: 'Tejas Narnaware',
      text: 'Very helpfull and kind staff. Good service. Nice and clean accomodations. Highly recommendable hotel.'
    },
    {
      id: 4,
      author: 'Yash Dubey',
      text: 'I had a very pleasant stay. The staff was really helpful and courteous. The location of the hotel is great and close to everything. Regards.'
    },
    
    // Add more reviews as needed
  ];

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === reviews.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? reviews.length - 1 : prevSlide - 1));
  };

  return (
    <>
    <Helmet>
        <title>ParvatiWoods-Testimonials</title>
        <meta name="description" content="Welcome to Your Website Name. Discover our amazing services and book your stay with us." />
        {/* Add more meta tags as needed */}
      </Helmet>
      <section className="reviews">
        <div className="slider">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={index === currentSlide ? 'slide active' : 'slide'}
            >
              <h2>{review.author}</h2>
              <p>{review.text}</p>
            </div>
          ))}
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <button className="next" onClick={nextSlide}>&#10095;</button>



          <div className="bullets">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={index === currentSlide ? 'bullet active' : 'bullet'}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
        </div>
        
      </section>
      <Footer />
    </>
  );
};

export default Reviews;
