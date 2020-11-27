import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data'
})

instance.defaults.headers.common['Content-Type'] = "application/json";

export default instance;