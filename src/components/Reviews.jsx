import React, { useState } from 'react';
import '../styles/Reviews.css';
import Footer from './Footer';

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      author: 'John Doe',
      text: 'Great product, highly recommended!'
    },
    {
      id: 2,
      author: 'Jane Smith',
      text: 'Excellent service, very satisfied!'
    },
    {
      id: 3,
      author: 'Michael Johnson',
      text: 'Amazing experience, will definitely come back!'
    },
    {
      id: 4,
      author: 'Emily Brown',
      text: 'Outstanding quality and value for money!'
    },
    {
      id: 5,
      author: 'David Wilson',
      text: 'Impressed with the professionalism and efficiency!'
    },
    {
      id: 6,
      author: 'Sarah Lee',
      text: 'Highly responsive and attentive staff!'
    },
    {
      id: 7,
      author: 'Alex Clark',
      text: 'Top-notch service, exceeded my expectations!'
    }
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
