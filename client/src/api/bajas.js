import axios from 'axios'

export const allReclamosRequest = async () => {

    const result = await axios.get('/getreclamos')

    return result
}