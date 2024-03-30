// components/BookRoom.js
import React from 'react';
import Footer from './Footer';
import '../styles/BookRoom.css';
import home3 from "../Parvatiwoods/Hotel rooms/home3.jpg"

const BookRoom = () => {
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
        <h3 className='more-details' >More details</h3>

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
        <h3 className='more-details' >More details</h3>

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
        
        <h3 className='more-details'>More details</h3>
        {//<p onClick={<StandardRoom></StandardRoom>}>More Details</p>
        }
      </div>
    </section>
    
    <Footer></Footer>
    
    </>
   
  );
}

export default BookRoom;
