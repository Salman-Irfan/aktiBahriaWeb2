const express = require('express');
const { createUserAccountControllerIndex, readAllBankAccountsControllerIndex, readBankAccountByIdControllerIndex, deleteUserBankAccountControllerIndex, updateUserBankAccountControllerIndex } = require('../../../../controllers/bankControllers');


const bankRouter = express.Router()

bankRouter.post(`/create-user-account`, createUserAccountControllerIndex)
// read
bankRouter.get(`/read-all-bank-accounts`, readAllBankAccountsControllerIndex)
bankRouter.get(`/read-bank-account/:id`, readBankAccountByIdControllerIndex)
// delete
bankRouter.delete(`/delete-user-bank-account/:id`, deleteUserBankAccountControllerIndex)
// update
bankRouter.patch(`/update-user-bank-account/:id`, updateUserBankAccountControllerIndex)

module.exports = bankRouter