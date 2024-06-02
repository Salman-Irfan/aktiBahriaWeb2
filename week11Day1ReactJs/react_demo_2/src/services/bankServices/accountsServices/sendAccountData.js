import axios from "axios"

export const sendAccountData = async (accountForm) => {
    try {
        const createAccountApiResponse = await axios.post(`http://localhost:8000/api/create-user-account`, accountForm)
        console.log(createAccountApiResponse)
        return createAccountApiResponse
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
}