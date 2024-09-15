import React, { useState } from 'react';
import './TranslatorPage.css';

const TranslatorPage = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translateText = async () => {
    // Mock translation API call
    setTranslatedText(`Translated: ${text}`);
  };

  return (
    <div className="translator-container">
      <h1>Translator</h1>
      <textarea
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={translateText}>Translate</button>
      <div className="translated-result">
        {translatedText}
      </div>
    </div>
  );
};

export default TranslatorPage;
