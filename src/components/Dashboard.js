import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import composeButton from '../images/compose-button.png';

const Dashboard = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/emails');
      setEmails(response.data.emails);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="email-container">
        {emails.length === 0 ? (
          <p>No emails</p>
        ) : (
          <ul className="email-list">
            {emails.map((email) => (
              <li key={email.id}>
                <div className="email-item">
                  <div className="sender">{email.sender}</div>
                  <div className="subject">{email.subject}</div>
                  <div className="timestamp">{email.timestamp}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link to="/compose" className="compose-button">
        <img src={composeButton} alt="Compose" />
      </Link>
    </div>
  );  
};

export default Dashboard;
