import axios from 'axios';
import middleware from '../../middleware/apiMiddleware';

const handler = async (req, res) => {
    try {
        if (req.method === 'POST') {
            let options = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            console.log("subrequest",req.body);
            let { data } = await axios.get(`https://dummyjson.com/products`, options);
            console.log("data in server:: ",data)
            res.status(200).json({ status: true, data: data });
        } else {
            res.status(400).json({ status: false, message: "Invalid Request" })
        }
    } catch (error) {
        console.log("subrequest error",error);
        res.status(400).json({ status: false, message: "Failed", error: error })
    }
}
export default middleware(handler);