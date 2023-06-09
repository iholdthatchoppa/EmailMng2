import React from 'react';
import axios from 'axios';
import gmailButton from '../images/gmail.png';
import '../App.css';
import { Link } from 'react-router-dom';

const ConnectGmail = () => {
  const handleConnectGmail = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/emails/connect-gmail');
      console.log(response.data);

      // Redirect to the email dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="centered-container">
      <h1>Connect With Email Service Provider</h1>
      <Link onClick={handleConnectGmail} className="compose-button">
        <img src={gmailButton} alt="gmailButton" />
      </Link>
    </div>
  );
};

export default ConnectGmail;
