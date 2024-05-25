const BankAccounts = require("../../../models/bankModels/userAccountModels/userAccountModel")

const readBankAccountByIdController = async (req, res) => {
    // try catch pending
    const bankAccountId = req.params.id
    console.log(bankAccountId)
    
    const bankAccountDetail = await BankAccounts.findById(bankAccountId)
    
    return res.json(bankAccountDetail)
}
module.exports = readBankAccountByIdController