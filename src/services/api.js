const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const getFaqs = async () => {
  const response = await fetch(`${API_URL}/faqs`);
  if (!response.ok) {
    throw new Error('Failed to fetch FAQs');
  }
  return response.json();
};

export const createFaq = async (faq) => {
  const response = await fetch(`${API_URL}/faqs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(faq),
  });
  if (!response.ok) {
    throw new Error('Failed to create FAQ');
  }
  return response.json();
};

export const updateFaq = async (id, faq) => {
  const response = await fetch(`${API_URL}/faqs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(faq),
  });
  if (!response.ok) {
    throw new Error('Failed to update FAQ');
  }
  return response.json();
};

export const deleteFaq = async (id) => {
  const response = await fetch(`${API_URL}/faqs/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete FAQ');
  }
  return response.json();
};
