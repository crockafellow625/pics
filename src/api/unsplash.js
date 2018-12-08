import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 3afeaba8f2932c3d2c5a8e99309e27ca8e7b29b85a602120c5cfca6df5379dc9'
  }
})
