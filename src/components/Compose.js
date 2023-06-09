import React, { useState } from 'react';
import axios from 'axios';
import '../Compose.css'; // Import the custom CSS file for styling

const Compose = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSendEmail = async () => {
    try {
      await axios.post('/api/emails', { to, subject, body });
      // Handle successful email sending, such as showing a success message or redirecting
      console.log('Email sent successfully');
    } catch (error) {
      // Handle error in sending email, such as showing an error message
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="compose-heading">Compose Email</h2>
      <input type="text" className="compose-input" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
      <input type="text" className="compose-input" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <textarea className="compose-textarea" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
      <button className="compose-button" onClick={handleSendEmail}>Send Email</button>
    </div>
  );
};

export default Compose;
