import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpecificAccount = () => {
    // State variable
    const [accountDetails, setAccountDetails] = useState({});

    // Params
    const { id } = useParams();
    console.log(id);

    const getAccountDetailsById = async () => {
        try {
            const specificDetailsApiResponse = await axios.get(`http://localhost:8000/api/read-bank-account/${id}`);
            console.log(specificDetailsApiResponse);

            // Set the state with the fetched data
            setAccountDetails(specificDetailsApiResponse.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAccountDetailsById();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Account Details</h2>
            <div className="bg-white shadow-md rounded p-4">
                <p><strong>ID:</strong> {accountDetails._id}</p>
                <p><strong>Customer Name:</strong> {accountDetails.customerName}</p>
                <p><strong>Account Number:</strong> {accountDetails.accountNumber}</p>
                <p><strong>Initial Balance:</strong> {accountDetails.initialBalance}</p>
                <p><strong>ID Type:</strong> {accountDetails.idType}</p>
                <p><strong>Source of Income:</strong> {accountDetails.sourceOfIncome}</p>
                <p><strong>Total Balance:</strong> {accountDetails.totalBalance}</p>
                <p><strong>Created At:</strong> {new Date(accountDetails.createdAt).toLocaleString()}</p>
                <p><strong>Updated At:</strong> {new Date(accountDetails.updatedAt).toLocaleString()}</p>
            </div>
        </div>
    );
};

export default SpecificAccount;
