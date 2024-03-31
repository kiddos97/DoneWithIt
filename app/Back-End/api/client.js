import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.86.30:9000/api', // Replace with your mock server URL
});


export default apiClient;
