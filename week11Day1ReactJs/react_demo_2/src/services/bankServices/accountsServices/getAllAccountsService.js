import axios from "axios"
import { API, API_V1, BANK_API, BASE_URL, endPoints } from "../../../constants/apiUrls/apiUrls"

export const getAllAccountsService = async () => {
    try {
        // const getApiResponse = await axios.get(`http://localhost:8000/api/read-all-bank-accounts`)
        const getApiResponse = await axios.get(`${BASE_URL}${API}${API_V1}${BANK_API}${endPoints.readUserAccounts}`)
        
        return getApiResponse.data
    } catch (error) {
        console.log(error)
    }
}