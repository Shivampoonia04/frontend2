import React, { useEffect, useState } from 'react';
import { getFaqs, createFaq, updateFaq, deleteFaq } from '../services/api';
import './FaqPage.css';

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const result = await getFaqs();
        setFaqs(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
        setError('Failed to load FAQs.');
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const handleAddFaq = async () => {
    if (!newFaq.question || !newFaq.answer) {
      setError('Both question and answer are required.');
      return;
    }
    try {
      const addedFaq = await createFaq(newFaq);
      setFaqs([...faqs, addedFaq]);
      setNewFaq({ question: '', answer: '' });
      setError(null);
    } catch (error) {
      console.error('Error adding FAQ:', error);
      setError('Failed to add FAQ.');
    }
  };

  const handleDeleteFaq = async (id) => {
    try {
      await deleteFaq(id);
      setFaqs(faqs.filter(faq => faq.id !== id));
      setError(null);
    } catch (error) {
      console.error('Error deleting FAQ:', error);
      setError('Failed to delete FAQ.');
    }
  };

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
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
            {faqs.length === 0 ? (
              <p>No FAQs available.</p>
            ) : (
              faqs.map((faq) => (
                <div key={faq.id} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                  <button onClick={() => handleDeleteFaq(faq.id)}>Delete</button>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default FaqPage;
