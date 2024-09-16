// Ensure that you only define API_URL once
const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

// Helper function to handle fetch errors
const handleFetchErrors = async (response) => {
  if (!response.ok) {
    let errorMessage;
    try {
      // Try to get the error message from JSON response
      const errorData = await response.json();
      errorMessage = errorData.message || errorData.error || 'An error occurred while fetching data';
    } catch (error) {
      // Fallback to text if JSON parsing fails
      errorMessage = await response.text();
    }
    const statusCode = response.status;
    throw new Error(`Error ${statusCode}: ${errorMessage}`);
  }
  return response;
};

// Function to fetch FAQs
export const getFaqs = async () => {
  try {
    console.log(`Fetching FAQs from: ${API_URL}/faqs`);
    const response = await fetch(`${API_URL}/faqs`);
    await handleFetchErrors(response);
    return response.json();
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw error; // Re-throw error for further handling
  }
};

// Function to create a new FAQ
export const createFaq = async (faq) => {
  try {
    console.log(`Creating FAQ at: ${API_URL}/faqs`);
    console.log('Request Body:', JSON.stringify(faq)); // Log the request body

    const response = await fetch(`${API_URL}/faqs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(faq),
    });

    // Check if response is okay
    await handleFetchErrors(response);

    // Log the response status and headers
    console.log('Response Status:', response.status);
    console.log('Response Headers:', response.headers.raw());

    return response.json();
  } catch (error) {
    console.error('Error creating FAQ:', error);
    throw error; // Re-throw error for further handling
  }
};

// Function to update an existing FAQ
export const updateFaq = async (id, faq) => {
  try {
    console.log(`Updating FAQ ${id} at: ${API_URL}/faqs/${id}`);
    const response = await fetch(`${API_URL}/faqs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(faq),
    });
    await handleFetchErrors(response);
    return response.json();
  } catch (error) {
    console.error('Error updating FAQ:', error);
    throw error; // Re-throw error for further handling
  }
};

// Function to delete an FAQ
export const deleteFaq = async (id) => {
  try {
    console.log(`Deleting FAQ ${id} at: ${API_URL}/faqs/${id}`);
    const response = await fetch(`${API_URL}/faqs/${id}`, {
      method: 'DELETE',
    });
    await handleFetchErrors(response);
    return response.json();
  } catch (error) {
    console.error('Error deleting FAQ:', error);
    throw error; // Re-throw error for further handling
  }
};
