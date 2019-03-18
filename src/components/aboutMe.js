import React from 'react';
import contact from "../image/contact.jpg";
const About = props => {
    return (
      <div className="about_me_container">
        <h2>About Me</h2>
        <div className="contact-container">
        <div className = "contact-image">
          <img src={contact} alt="contact" style = {{width:"50%", height:"50%"}}/>
        </div>
        <div className = "contact-details">
          <h5><strong>Name:</strong> Aditya Rana</h5>
          <h5><strong>Email:</strong> adiran313u@gmail.com</h5>
          <h5><strong>Address:</strong> yö-kylä 1C 11 Turku,Finland</h5>
          <h5><strong>Tel:</strong> +358453581678</h5>
        </div>
      </div>
      </div>
    );
  
}

export default About;