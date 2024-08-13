import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const { name, phone, message } = formData;
  
      try {
        const response = await fetch('https://formspree.io/f/xpwaroye', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            phone,
            message,
          }),
        });
  
        const result = await response.json();
  
        alert(result.message || 'Form submitted successfully!');
        setFormData({ name: '', phone: '', message: '' });
      } catch (error) {
        alert('There was an error submitting the form. Please try again later.');
      }
    };
  
    return (
      <div className='contact'>
        <div className="contact-col">
          <h3>Send us a message<img src={msg_icon} alt=''/></h3>
          <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
          <ul>
            <li><img src={mail_icon} alt=''/>sysavanefanta49@gmail.com</li>
            <li><img src={phone_icon} alt=''/>+234-22-34-22-91</li>
            <li><img src={location_icon} alt=''/>Eko Atlantic Boulevard, Victoria Island, Lagos.</li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={handleSubmit}>
            <label>Your name</label>
            <input 
              type='text' 
              name='name' 
              placeholder='Enter your name' 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <label>Phone Number</label>
            <input 
              type='tel' 
              name='phone' 
              placeholder='Enter your mobile number' 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
            <label>Write your message here</label>
            <textarea 
              name='message' 
              cols='30' 
              rows='6' 
              placeholder='Enter your message' 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type='submit' className='btn dark-btn'>
              Submit Now<img src={white_arrow} alt='' />
            </button>
          </form>
          <span></span>
        </div>
      </div>
    );
  }
  
  export default Contact;