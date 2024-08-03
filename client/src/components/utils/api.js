// frontend/utils/api.js

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Función para verificar el email
export const verifyEmail = async (email) => {
  try {
    const response = await fetch(`${apiUrl}/contact/verify-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    if (!response.ok) {
      throw new Error('Error al verificar el email');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default verifyEmail;
