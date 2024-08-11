import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_z3rdt5x', 'template_0rfz12e', {
      from_name: formData.name,
      to_name: 'Anis Halabi',
      message: formData.message
    }, 'GoCG6sycVe5_7X8dh')
    .then((result) => {
      console.log(result.text);
      setStatus('Submission Sent successfully!');
      setFormData({ name: '', message: '' }); // Clear the form
    }, (error) => {
      console.log(error.text);
      setStatus('Failed to send message.');
    });
  };

  return (
    <section id="contact" className="ContactMe-section">
      <h2 className="ContactMe-title">
        <span className="highlight">Contact</span> Me
      </h2>
      <form onSubmit={handleSubmit} className="ContactMe-form">
        <label htmlFor="name" className="ContactMe-label"></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="ContactMe-input"
          placeholder="Your Name"
          required
        />
        <label htmlFor="message" className="ContactMe-label"></label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="ContactMe-textarea"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" className="ContactMe-button">Send</button>
        {status && <p className="ContactMe-status">{status}</p>}
      </form>
    </section>
  );
}

export default ContactMe;
