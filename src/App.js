// App.js
import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav.jsx'; // Import Nav component
import Home from './components/Home.jsx';
import Property from './components/Property.jsx';
import Reviews from './components/Reviews.jsx';
import BookRoom from './components/BookRoom.jsx';
import Contact from './components/Contact.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property" element={<Property />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/book-room" element={<BookRoom />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
