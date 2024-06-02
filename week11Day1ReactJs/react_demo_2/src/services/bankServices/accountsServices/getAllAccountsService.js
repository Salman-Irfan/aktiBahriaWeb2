import axios from "axios"

export const getAllAccountsService = async () => {
    try {
        const getApiResponse = await axios.get(`http://localhost:8000/api/read-all-bank-accounts`)
        
        return getApiResponse.data
    } catch (error) {
        console.log(error)
    }
}