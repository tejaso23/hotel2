import React, { useState } from "react";
import "../styles/Contact.css";
import Footer from "./Footer";
import contact1 from "../Parvatiwoods/Contact us page/contact1.jpg";
import { Helmet } from 'react-helmet';



const Contact = () => {
  const [state, setState] = useState({
    submitting: false,
    submitted: false,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "+91", // Default to India code
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      state.firstName.trim() === "" ||
      state.lastName.trim() === "" ||
      state.email.trim() === "" ||
      state.phoneNumber.trim() === "" ||
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
      const response = await fetch("https://formspree.io/f/mvoevgwn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: state.firstName,
          lastName: state.lastName,
          email: state.email,
          phoneNumber: state.phoneNumber,
          message: state.message,
        }),
      });

      if (response.ok) {
        setState({
          ...state,
          submitting: false,
          submitted: true,
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "+91",
          message: "",
        });
        alert("Form submitted successfully!");
      } else {
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
      [name]: value,
    });
  };

  return (
    <>{/* Helmet Component to set meta tags */}
    <Helmet>
      <title>Contact Us - ParvatiWoods</title>
      <meta name="description" content="Contact us for inquiries and support." />
      {/* Add more meta tags as needed */}
    </Helmet>
    <div>
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
                  <p>Suma Ropa,Kasol,Kullu,Himachal Pradesh,India</p>
                  <p>Ujjwal (Owner): 9418016518</p>
                  <p>Gaurav : 8219951117/ Pankaj : 9459900143</p>
                  
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
                    Email.id
                    <input
                      type="email"
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <div className="phone-input">
                    <label className="input-label">
                      Country Code
                      <select
                        name="countryCode"
                        className="country-code"
                        value={state.phoneNumber.substring(0, 3)}
                        onChange={(e) =>
                          setState({ ...state, phoneNumber: e.target.value })
                        }
                      >
                        <option value="+91">+91 (India)</option>
                        <option value="+1">+1 (USA)</option>
                        <option value="+44">+44 (United Kingdom)</option>
                        <option value="+33">+33 (France)</option>
                        <option value="+49">+49 (Germany)</option>
                        <option value="+39">+39 (Italy)</option>
                        <option value="+86">+86 (China)</option>
                        <option value="+81">+81 (Japan)</option>
                        <option value="+82">+82 (South Korea)</option>
                        <option value="+65">+65 (Singapore)</option>
                        <option value="+60">+60 (Malaysia)</option>
                        <option value="+971">
                          +971 (United Arab Emirates)
                        </option>
                        <option value="+966">+966 (Saudi Arabia)</option>
                        <option value="+977">+977 (Nepal)</option>
                        <option value="+880">+880 (Bangladesh)</option>
                        <option value="+92">+92 (Pakistan)</option>
                        <option value="+95">+95 (Myanmar)</option>
                        <option value="+94">+94 (Sri Lanka)</option>
                        <option value="+86">+86 (China)</option>
                        <option value="+977">+977 (Nepal)</option>
                        <option value="+95">+95 (Myanmar)</option>
                        <option value="+975">+975 (Bhutan)</option>
                        <option value="+855">+855 (Cambodia)</option>
                        <option value="+62">+62 (Indonesia)</option>
                        <option value="+66">+66 (Thailand)</option>
                        <option value="+84">+84 (Vietnam)</option>
                        {/* Add more options for other country codes */}
                      </select>
                    </label>
                    <label className="input-label">
                      Phone No. {/* Added phone number field */}
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={state.phoneNumber}
                        maxLength={15}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>
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
              <input
                type="hidden"
                name="_subject"
                value="New Form Submission"
              />
              <input
                type="hidden"
                name="_next"
                value="https://your-website.com/thank-you-page"
              />
            </form>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
      
     
    </>
  );
};

export default Contact;
