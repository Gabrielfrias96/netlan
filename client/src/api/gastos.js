import axios from 'axios'

export const createGastoRequest = async (value) => {

    try{
        const result = await axios.post('/newgasto', value)
        
        return result.data
   }
   catch(err){
       console.log(err)
   }

}