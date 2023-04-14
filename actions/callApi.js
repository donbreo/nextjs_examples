import axios from 'axios';
export const callApi = async (router) => {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {text: "some text"}
    };
    console.log("router.query *",requestOptions);
    let { data } = await axios.post(`/api/catfact`, requestOptions);
    console.log("data in frontend",data)
    return data
}