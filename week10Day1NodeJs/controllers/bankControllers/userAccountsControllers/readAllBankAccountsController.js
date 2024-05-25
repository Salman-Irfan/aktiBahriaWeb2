const BankAccounts = require("../../../models/bankModels/userAccountModels/userAccountModel")

const readAllBankAccountsController = async(req, res) => {
    try {
        const allBankAccounts = await BankAccounts.find()
        return res.json({
            success: true,
            message: `bank accounts read successfully`,
            details: allBankAccounts
        })
    } catch (error) {
        console.log(error)
        return res.json({
            error: error.message
        })
    }
    
}
module.exports = readAllBankAccountsController