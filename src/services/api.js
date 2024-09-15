// Ensure that you only define API_URL once
const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

// Function to fetch FAQs
export const getFaqs = async () => {
  try {
    const response = await fetch(`${API_URL}/faqs`);
    if (!response.ok) {
      throw new Error('Failed to fetch FAQs');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw error; // Re-throw error for further handling
  }
};

// Function to create a new FAQ
export const createFaq = async (faq) => {
  try {
    const response = await fetch(`${API_URL}/faqs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(faq),
    });
    if (!response.ok) {
      throw new Error('Failed to create FAQ');
    }
    return response.json();
  } catch (error) {
    console.error('Error creating FAQ:', error);
    throw error; // Re-throw error for further handling
  }
};

// Function to update an existing FAQ
export const updateFaq = async (id, faq) => {
  try {
    const response = await fetch(`${API_URL}/faqs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(faq),
    });
    if (!response.ok) {
      throw new Error('Failed to update FAQ');
    }
    return response.json();
  } catch (error) {
    console.error('Error updating FAQ:', error);
    throw error; // Re-throw error for further handling
  }
};

// Function to delete an FAQ
export const deleteFaq = async (id) => {
  try {
    const response = await fetch(`${API_URL}/faqs/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete FAQ');
    }
    return response.json();
  } catch (error) {
    console.error('Error deleting FAQ:', error);
    throw error; // Re-throw error for further handling
  }
};
