
import axios from 'axios';


  const Handleconnect= async ( body,urlroute,method ) => {

    try {
      if (method==="GET"){
        const response = await axios.get(`http://localhost:5001/${urlroute}`, body);
        return response; // Return additional data if needed
      }else if(method==="POST"){
        const response = await axios.post(`http://localhost:5001/${urlroute}`, body);
        return response; // Return additional data if needed
      }

    } catch (error) {
      throw new Error(error.response.data.message); // Throw a more informative error
    }
  };


export default Handleconnect;
