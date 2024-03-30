/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../styles/Contact.css";
import Footer from "./Footer";
import contact1 from "../Parvatiwoods/Contact us page/contact1.jpg";

const Contact = () => {
  const [state, setState] = useState({
    submitting: false,
    submitted: false,
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
   

    if (
      state.firstName.trim() === "" ||
      state.lastName.trim() === "" ||
      state.email.trim() === "" ||
      state.message.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (state.firstName.length < 3 || state.lastName.length < 3) {
      alert("First name and last name must be at least 3 characters long.");
      return;
    }

    setState({ ...state, submitting: true });

    
    try {
      const response = await fetch("https://formspree.io/f/xgegljbd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: state.firstName,
          lastName: state.lastName,
          email: state.email,
          message: state.message
        })
      });

      if (response.ok) {
        setState({
          ...state,
          submitting: false,
          submitted: true,
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        });
        // Show success message
        alert("Form submitted successfully!");
      } else {
        // Handle error, maybe show an error message
        console.error("Form submission failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <>
      <section className="contact">
        <div className="midcon">
          <h1>Contact Us</h1>
          <p>
            This is your Contact section. Tell website visitors how they can
            contact you and encourage them to reach out with any questions and
            comments.
          </p>
        </div>

        <div className="Ccontent">
          <img src={contact1} alt="Home Slide" />

          <div className="just_Ccontent">
            <form className="transparent-form" onSubmit={handleSubmit}>
              <div className="contact-details">
                <div className="address">
                  <p>500 Terry Francine Street, San Francisco, CA 94158</p>
                  <p>info@mysite.com</p>
                  <p>123-456-7890</p>
                </div>

                <div className="input-fields">
                  <label className="input-label">
                    First Name
                    <input
                      type="text"
                      name="firstName"
                      value={state.firstName}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="input-label">
                    Last Name
                    <input
                      type="text"
                      name="lastName"
                      value={state.lastName}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="input-label">
                    Email
                    <input
                      type="email"
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="input-label">
                    Message
                    <textarea
                      name="message"
                      value={state.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </label>
                  <button type="submit" disabled={state.submitting}>
                    Send
                  </button>
                </div>
              </div>
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
                <a href="#">Linkedin</a>
              </div>
              <input type="hidden" name="_subject" value="New Form Submission" />
              <input type="hidden" name="_next" value="https://your-website.com/thank-you-page" />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
