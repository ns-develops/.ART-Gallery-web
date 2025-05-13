import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Tack för ditt meddelande! Vi återkommer inom kort');
    setFormData({ name: '', email: '', message: '' }); 
  };

  return (
    <div className="contact-container">
      <h1>Kontakta oss</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Namn:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          E-post:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Meddelande:
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <button type="submit">Skicka</button>
      </form>
    </div>
  );
}

export default Contact;
