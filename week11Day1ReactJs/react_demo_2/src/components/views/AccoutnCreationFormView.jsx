import axios from 'axios';
import React, { useState } from 'react'
import { sendAccountData } from '../../services/bankServices/accountsServices/sendAccountData';
import { Link } from 'react-router-dom';

const AccoutnCreationFormView = () => {

    // const obj1 = {
    //     id: 1,
    //     name: `salman`
    // }
    // const obj2 = {
    //     extra: 123,
    //     ...obj1,
    //     another: 567
    // }
    // console.log(obj2)
    // obj2.someNew = "veru uniqy"
    // console.log(obj2)

    const [accountForm, setAccountForm] = useState({
        customerName: ``,
        accountNumber: ``,
        initialBalance: 0,
        idType: ``,
        sourceOfIncome: ``,
        totalBalance: 0,
    })
    // handleInputChange
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAccountForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    // handleAccountForm
    const handleAccountForm = async (e) => {
        e.preventDefault()
        console.log(accountForm)
        // try {
        //     const createAccountApiResponse = await axios.post(`http://localhost:8000/api/create-user-account`, accountForm )
        //     console.log(createAccountApiResponse)
        // } catch (error) {
        //     console.log(error)
        //     alert(error.message)
        // }
        sendAccountData(accountForm)
    }

    return (
        <>
            {/* btn start */}
            <Link to={`/all-accounts`}>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View All Accounts</button>
            </Link>
            {/* btn end */}
            <form className="max-w-md mx-auto" onSubmit={handleAccountForm}>
                {/* name start */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="customerName"
                        id="customerName"
                        className="block py-2.5 px-0 w-full   border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Customer Name"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                {/* name end */}
                {/* accoutn number start */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="accountNumber"
                        id="accountNumber"
                        className="block py-2.5 px-0 w-full   border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Enter Account Number "
                        required
                        onChange={handleInputChange}
                    />
                </div>
                {/* accoutn number end */}
                {/* initial balance start */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="number"
                        name="initialBalance"
                        id="initialBalance"
                        className="block py-2.5 px-0 w-full   border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Enter Initial Balance "
                        required
                        onChange={handleInputChange}
                    />

                </div>
                {/* initial balance end */}

                {/* idType start */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="idType"
                        id="idType"
                        className="block py-2.5 px-0 w-full   border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter idType"
                        required
                        onChange={handleInputChange}
                    />

                </div>
                {/* idType end */}
                {/* sourceOfIncome start */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="sourceOfIncome"
                        id="sourceOfIncome"
                        className="block py-2.5 px-0 w-full   border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Enter Source Of Income "
                        required
                        onChange={handleInputChange}
                    />

                </div>
                {/* accoutn number end */}

                {/* totalBalance start */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="number"
                        name="totalBalance"
                        id="totalBalance"
                        className="block py-2.5 px-0 w-full   border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" Enter Total Balance"
                        required
                        onChange={handleInputChange}
                    />

                </div>
                {/* accoutn number end */}

                {/* submit start */}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                {/* submit end */}
            </form>


        </>
    )
}

export default AccoutnCreationFormView