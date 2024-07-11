import axios from 'axios';
import AppConstants from './lib/types/AppConstants';


export default async function postPayment (data)  {
    try {
        const response = await axios.post(AppConstants.BASE_BACKEND_URL, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}