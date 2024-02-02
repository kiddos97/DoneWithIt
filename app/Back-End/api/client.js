import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.86.30:3000', // Replace with your mock server URL
});

apiClient.get('/api/listings')
  .then(response => {
    if (response.ok) {
      console.log('Listings data:', response.data);
    } else {
      console.error('Error fetching listings:', response.problem);
    }
  })
  .catch(error => {
    console.error('Error during fetch:', error);
  });
