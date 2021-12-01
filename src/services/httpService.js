import axios from 'axios';
const IPADDRESS = axios.create({
    baseURL: process.env.IP_ADDRESS_URL
})


// Register interceptors
axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
        // We need to log this thing
        // Logger Service should log it
        console.log('Logging the error', error);
        // might be show the error via toast
        
    }
});

const httpService = {
    get: IPADDRESS.get,
    axios: axios
}
export default httpService;
