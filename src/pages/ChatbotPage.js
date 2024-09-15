import React, { useState } from 'react';
import './ChatbotPage.css';

const ChatbotPage = () => {
  const [fruits] = useState([
    { id: 1, name: 'Apple', details: 'A sweet red fruit' },
    { id: 2, name: 'Banana', details: 'A yellow elongated fruit' },
  ]);

  return (
    <div className="chatbot-container">
      <h1>Chatbot</h1>
      <div className="fruit-cards">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="fruit-card">
            <h2>{fruit.name}</h2>
            <p>{fruit.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatbotPage;
