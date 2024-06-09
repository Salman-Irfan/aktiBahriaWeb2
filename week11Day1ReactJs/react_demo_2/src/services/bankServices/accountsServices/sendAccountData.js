import axios from "axios"
import { API, API_V1, BANK_API, BASE_URL, endPoints } from "../../../constants/apiUrls/apiUrls"

export const sendAccountData = async (accountForm) => {
    try {
        // const createAccountApiResponse = await axios.post(`http://localhost:8000/api/create-user-account`, accountForm)
        const createAccountApiResponse = await axios.post(`${BASE_URL}${API}${API_V1}${BANK_API}${endPoints.createUserAccount}`, accountForm)
        console.log(createAccountApiResponse)
        return createAccountApiResponse
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
}