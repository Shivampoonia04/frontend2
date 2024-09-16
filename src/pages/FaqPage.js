import React, { useEffect, useState } from 'react';
import { getFaqs, createFaq, updateFaq, deleteFaq } from '../services/api';
import './FaqPage.css';

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const result = await getFaqs();
        setFaqs(result);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchFaqs();
  }, []);

  const handleAddFaq = async () => {
    try {
      const addedFaq = await createFaq(newFaq);
      setFaqs([...faqs, addedFaq]);
      setNewFaq({ question: '', answer: '' });
    } catch (error) {
      console.error('Error adding FAQ:', error);
    }
  };

  const handleDeleteFaq = async (id) => {
    try {
      await deleteFaq(id);
      setFaqs(faqs.filter(faq => faq.id !== id));
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <div className="add-faq">
        <input
          type="text"
          placeholder="Question"
          value={newFaq.question}
          onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
        />
        <textarea
          placeholder="Answer"
          value={newFaq.answer}
          onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
        />
        <button onClick={handleAddFaq}>Add FAQ</button>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            <button onClick={() => handleDeleteFaq(faq.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
