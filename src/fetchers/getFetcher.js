import axios from 'axios';
const getFetcher = async(url) =>{
    const res =await axios.get(url)
    return res.data;
}
export default getFetcher;