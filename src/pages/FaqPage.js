import React, { useEffect, useState } from 'react';
import { getFaqs, createFaq, updateFaq, deleteFaq } from '../services/api';
import './FaqPage.css';

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const result = await getFaqs();
        setFaqs(result);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
        setError('Failed to load FAQs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const handleAddFaq = async () => {
    if (!newFaq.question || !newFaq.answer) {
      alert('Both question and answer are required.');
      return;
    }

    try {
      setLoading(true);
      const addedFaq = await createFaq(newFaq);
      setFaqs([...faqs, addedFaq]);
      setNewFaq({ question: '', answer: '' });
    } catch (error) {
      console.error('Error adding FAQ:', error);
      setError('Failed to add FAQ. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteFaq = async (id) => {
    try {
      setLoading(true);
      await deleteFaq(id);
      setFaqs(faqs.filter(faq => faq.id !== id));
    } catch (error) {
      console.error('Error deleting FAQ:', error);
      setError('Failed to delete FAQ. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
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
        <button onClick={handleAddFaq} disabled={loading}>
          {loading ? 'Adding...' : 'Add FAQ'}
        </button>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            <button onClick={() => handleDeleteFaq(faq.id)} disabled={loading}>
              {loading ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
