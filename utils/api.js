// src/utils/api.js
import axios from 'axios';

export const fetchLoadSheddingStatus = async () => {
  try {
    console.log('Fetching load shedding status...');
    const response = await axios.get('/api/loadshedding');
    console.log('Response received:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching load shedding status:', error);
    return null;
  }
};
