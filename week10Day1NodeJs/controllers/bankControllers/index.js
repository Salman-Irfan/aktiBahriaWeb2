const createUserAccountController = require("./userAccountsControllers/createUserAccountController");
const deleteUserBankAccountController = require("./userAccountsControllers/deleteUserBankAccountController");
const readAllBankAccountsController = require("./userAccountsControllers/readAllBankAccountsController");
const readBankAccountByIdController = require("./userAccountsControllers/readBankAccountByIdController");
const updateUserBankAccountController = require("./userAccountsControllers/updateUserBankAccountController");

const createUserAccountControllerIndex = createUserAccountController
const deleteUserBankAccountControllerIndex = deleteUserBankAccountController
const readAllBankAccountsControllerIndex = readAllBankAccountsController
const readBankAccountByIdControllerIndex = readBankAccountByIdController
const updateUserBankAccountControllerIndex = updateUserBankAccountController

module.exports = {
    createUserAccountControllerIndex,
    deleteUserBankAccountControllerIndex,
    readAllBankAccountsControllerIndex,
    readBankAccountByIdControllerIndex,
    updateUserBankAccountControllerIndex,
}