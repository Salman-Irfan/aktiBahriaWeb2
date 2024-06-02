const BankAccounts = require("../../../models/bankModels/userAccountModels/userAccountModel")

const updateUserBankAccountController = async (req, res) => {
    try {
        const { id } = req.params
        // extract req body data
        const {customerName, accountNumber} = req.body
        // update logic

        const updatedUserBankAccount = await BankAccounts.findByIdAndUpdate(
            id,
            {
                customerName: customerName,
                accountNumber: accountNumber
            },
            {
                new: true,
            }
        )

        return res.json({ 
            success: true,
            message: `user record updated`,
            details: updatedUserBankAccount
        })
    } catch (error) {
        console.log(error)
        return res.json({
            error: error.message
        })
    }
}
module.exports = updateUserBankAccountController