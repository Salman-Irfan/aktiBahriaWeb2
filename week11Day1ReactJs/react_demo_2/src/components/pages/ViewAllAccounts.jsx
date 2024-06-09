import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API, API_V1, BANK_API, BASE_URL, endPoints } from '../../constants/apiUrls/apiUrls';

const ViewAllAccounts = () => {
    const [bankAccounts, setBankAccounts] = useState([]);

    const getAllAccountsService = async () => {
        try {
            // const getApiResponse = await axios.get(`http://localhost:8000/api/read-all-bank-accounts`);
            const getApiResponse = await axios.get(`${BASE_URL}${API}${API_V1}${BANK_API}${endPoints.readUserAccounts}`);
            console.log(getApiResponse.data);

            // Set the state with the fetched data
            setBankAccounts(getApiResponse.data.details);

        } catch (error) {
            console.log(error);
        }
    };

    // handleDeleteAccount
    const handleDeleteAccount = async (id) => {
        console.log(id)
        const deleteAccountResponse = await axios.delete(`http://localhost:8000/api/delete-user-bank-account/${id}`)
        console.log(deleteAccountResponse)
        if (deleteAccountResponse.data.success) {
            alert(deleteAccountResponse.data.message)
        }
        setBankAccounts((prevAccounts) => prevAccounts.filter(account => account._id !== id));
    }

    useEffect(() => {
        getAllAccountsService();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">View All Accounts</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Account Number</th>
                        <th className="py-2 px-4 border-b">Initial Balance</th>
                        <th className="py-2 px-4 border-b">ID Type</th>
                        <th className="py-2 px-4 border-b">Source of Income</th>
                        <th className="py-2 px-4 border-b">Total Balance</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bankAccounts.map((account) => (
                        <tr key={account._id}>
                            <td className="py-2 px-4 border-b">{account._id}</td>
                            <td className="py-2 px-4 border-b">{account.customerName}</td>
                            <td className="py-2 px-4 border-b">{account.accountNumber}</td>
                            <td className="py-2 px-4 border-b">{account.initialBalance}</td>
                            <td className="py-2 px-4 border-b">{account.idType}</td>
                            <td className="py-2 px-4 border-b">{account.sourceOfIncome}</td>
                            <td className="py-2 px-4 border-b">{account.totalBalance}</td>
                            <td className="py-2 px-4 border-b">
                                <Link to={`/account/${account._id}`} >
                                    <button className='bg-blue-500'>View</button>
                                </Link>
                                <Link to={`/account/update/${account._id}`} >
                                    <button className='bg-green-500'>Update</button>
                                </Link>
                                <button className='bg-red-500' onClick={() => { handleDeleteAccount(account._id) }} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewAllAccounts;
