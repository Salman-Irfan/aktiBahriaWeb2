import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateAccountFormPage = () => {
    const { id } = useParams();
    const [account, setAccount] = useState({
        customerName: '',
        accountNumber: '',
        initialBalance: '',
        idType: '',
        sourceOfIncome: '',
        totalBalance: ''
    });
    // export it from services forlder
    const fetchAccountData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/read-bank-account/${id}`);
            setAccount(response.data);
        } catch (error) {
            console.error('Error fetching account data', error);
        }
    };
    useEffect(() => {
        fetchAccountData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updateApiResponse = await axios.patch(`http://localhost:8000/api/update-user-bank-account/${id}`, account);
            console.log(updateApiResponse)
            if (updateApiResponse.data.success){
                alert(updateApiResponse.data.message)
            }else{
                alert(`an error occurred while updating`)
            }
        } catch (error) {
            console.error('Error updating account', error);
            alert('Failed to update account');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                <h1 className="text-2xl font-bold text-center text-gray-900">Update Account</h1>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Customer Name</label>
                            <input
                                id="customerName"
                                name="customerName"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={account.customerName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
                            <input
                                id="accountNumber"
                                name="accountNumber"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={account.accountNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="initialBalance" className="block text-sm font-medium text-gray-700">Initial Balance</label>
                            <input
                                id="initialBalance"
                                name="initialBalance"
                                type="number"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={account.initialBalance}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="idType" className="block text-sm font-medium text-gray-700">ID Type</label>
                            <input
                                id="idType"
                                name="idType"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={account.idType}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="sourceOfIncome" className="block text-sm font-medium text-gray-700">Source of Income</label>
                            <input
                                id="sourceOfIncome"
                                name="sourceOfIncome"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={account.sourceOfIncome}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="totalBalance" className="block text-sm font-medium text-gray-700">Total Balance</label>
                            <input
                                id="totalBalance"
                                name="totalBalance"
                                type="number"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={account.totalBalance}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateAccountFormPage;
