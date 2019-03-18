import React from 'react';
import contact from "../image/contact.jpg";
const About = props => {
    return (
      <div className="about_me_container">
        <h1>About Me</h1>
        <div className="contact-container">
        <div className = "contact-image">
          <img src={contact} alt="contact" style = {{width:"50%", height:"50%"}}/>
        </div>
        <div className = "contact-details">
          <h3><strong>Name:</strong> Aditya Rana</h3>
          <h3><strong>Email:</strong> adiran313u@gmail.com</h3>
          <h3><strong>Address:</strong> yö-kylä 1C 11 Turku,Finland</h3>
          <h3><strong>Tel:</strong> +358453581678</h3>
        </div>
      </div>
      </div>
    );
  
}

export default About;