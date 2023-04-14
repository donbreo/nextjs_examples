import axios from 'axios';
export const getProducts = async () => {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {text: "some text"}
    };
    let { data } = await axios.post(`/api/getproducts`, requestOptions);
    return data
}
export const getDetails = async (arg) => {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {text: "some text"}
    };
    let { data } = await axios.post(`/api/getproducts/${arg}`, requestOptions);
    return data
}