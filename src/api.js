import axios from 'axios';

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
   headers: {
    Authorization: 'Client-ID 3G30SR-rJm0wj8_wcKp_Cehxu03X6zY_LUOAlAx5Dt8'
   },
   params: {
    query: 'cars'
   } 
  })

  console.log(response)

  return response;
}

export default searchImages;