// components/BookRoom.js
import React from 'react';
import Footer from './Footer';
import '../styles/BookRoom.css';
import home3 from "../Parvatiwoods/Hotel rooms/home3.jpg"
import { useState } from 'react';



const BookRoom = () => {
   
  const [showModal, setShowModal] = useState(false);
  const [roomDetails, setRoomDetails] = useState({
    name: '',
    description: '',
    maxAdults: 0,
    size: '',
  });


  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const handleMoreDetails = (details) => {
    setRoomDetails(details);
    toggleModal();
  };


  return (
    <>

     

     <section className="book-room">

     <h1>Parvati Woods Cottage 97</h1>
     <h3>Select Rooms</h3>

      <div className='box'>
        <img src={home3} alt="first"></img>
        <div><p>Standard room</p>
        <p>2 Adults max</p>
        <p>30 m^2</p></div>
        <h3 className='more-details'  onClick={() => handleMoreDetails({
            name: 'Standard room',
            description: 'Basic room with essential amenities.',
            maxAdults: 2,
            size: '30 m^2',
          })}>More details</h3>

        {//<p onClick={<StandardRoom></StandardRoom>}>More Details</p>
        }
      </div>

      <div className='box'>
        <img src={home3} alt="second"></img>
        <div>
        <p>Superior room</p>
        <p>2 Adults max</p>
        <p>50 m^2</p>
        
        </div>
        <h3 className='more-details' onClick={() => handleMoreDetails({
            name: 'Superior room',
            description: 'Basic room with essential amenities.',
            maxAdults: 2,
            size: '50 m^2',
          })}>More details</h3>

        {//<p onClick={<StandardRoom></StandardRoom>}>More Details</p>
        }
      </div>

      <div className='box'>
        <img src={home3} alt="third"></img>
        <div>
        <p>Family room</p>
        <p>3 Adults max</p>
        <p>70 m^2</p>
        
        </div>
        
        <h3 className='more-details' onClick={() => handleMoreDetails({
            name: 'Family room',
            description: 'Basic room with essential amenities.',
            maxAdults: 3,
            size: '70 m^2',
          })}>More details</h3>
        {//<p onClick={<StandardRoom></StandardRoom>}>More Details</p>
        }
      </div>

       {/* Modal for displaying room details */}
       {showModal && (
          <div className="modal-container">
          <div className="modal">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>{roomDetails.name}</h2>
            <p>{roomDetails.description}</p>
            <p>Max Adults: {roomDetails.maxAdults}</p>
            <p>Size: {roomDetails.size}</p>
             <a href="/contact"><h3>Contact</h3></a>
            {/* Amenities section */}
            <div className="Amenities">
                <h3>Amenities</h3>
                <ul>
                  <li>Wi-Fi</li>
                  <li>TV</li>
                  <li>Air conditioning</li>
                  {/* Add more amenities as needed */}
                </ul>
              </div>
          </div>
          
        </div>
        )}
    </section>
    
    <Footer></Footer>
    
    </>
   
  );
}

export default BookRoom;
