import React, { useState } from 'react';
import './Contact.css';
import '../Assets/haha.css';



function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Submitted:', formData);
    alert('Thanks for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <div className="contact-info">
        <p>Feel free to reach out to me through the form below or on my social platforms!</p>
        <ul>
          <li>Facebook: <a href="https://www.facebook.com/vince.allen.quinto.2024">Vince Allen Quinto</a></li>
          <li>Instagram: <a href="https://www.instagram.com/n0vial/">n0vial</a></li>
          <li>Youtube: <a href="https://www.youtube.com/@Basach1">Basachi</a></li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;