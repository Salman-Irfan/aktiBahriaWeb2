const express = require('express');
const createUserAccountController = require('../../../../controllers/bankControllers/userAccountsControllers/createUserAccountController');
const readAllBankAccountsController = require('../../../../controllers/bankControllers/userAccountsControllers/readAllBankAccountsController');
const readBankAccountByIdController = require('../../../../controllers/bankControllers/userAccountsControllers/readBankAccountByIdController');
const deleteUserBankAccountController = require('../../../../controllers/bankControllers/userAccountsControllers/deleteUserBankAccountController');
const updateUserBankAccountController = require('../../../../controllers/bankControllers/userAccountsControllers/updateUserBankAccountController');

const bankRouter = express.Router()

bankRouter.post(`/create-user-account`, createUserAccountController)
// read
bankRouter.get(`/read-all-bank-accounts`, readAllBankAccountsController)
bankRouter.get(`/read-bank-account/:id`, readBankAccountByIdController)
// delete
bankRouter.delete(`/delete-user-bank-account/:id`, deleteUserBankAccountController)
// update
bankRouter.patch(`/update-user-bank-account/:id`, updateUserBankAccountController)

module.exports = bankRouter