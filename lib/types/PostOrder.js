import axios from 'axios';
import AppConstants from './AppConstants';

class PostOrder {
  static baseURL = AppConstants.BASE_BACKEND_URL;
  constructor() {};

  async postOrder(payload) {
    try {
      const response = await axios.post(baseURL, {...payload});
      return response.data;
    } catch (error) {
      console.error('Error making the request:', error);
      throw error;
    }
  }
}

export default PostOrder;