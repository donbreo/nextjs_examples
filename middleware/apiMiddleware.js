
const middleware = (handler) => {
        return async (req, res) => {
                //call some apis or do processing here
                req.body.user = "Data added by middleware"
                //call the request handler 
                return handler(req, res);
        }
}
export default middleware;