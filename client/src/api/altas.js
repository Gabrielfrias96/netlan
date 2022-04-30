import axios from 'axios'

export const filterDNIRequest = async (dato) => { 

    
        const query = await axios.post('/filterdni' , dato)
        
        return query
    
   

}