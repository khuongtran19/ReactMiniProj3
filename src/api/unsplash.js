import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 4Uwjiahz0x-jwBf12ngiNtCsd3twvKw56wvWAUNqz7k'
    }
})