import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'https://santhosh-ravi-my-portfolio.firebaseio.com/'
})
export default axiosInstance