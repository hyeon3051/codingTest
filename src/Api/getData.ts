import axios from "axios"

const GetData = async() =>{
    const data = await axios.get("http://localhost:3000/requests")
    .then(res=> res.data)
    return data
}
export default GetData