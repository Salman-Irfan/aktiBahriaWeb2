const BankAccounts = require("../../../models/bankModels/userAccountModels/userAccountModel");

const deleteUserBankAccountController = async (req, res) => {
    try {
        const {id} = req.params;

        // delete logic
        const deletedBankAccount = await BankAccounts.findByIdAndDelete(id);

        return res.json({
            success: true,
            message: `Bank account deleted successfully`,
            details: deletedBankAccount
        })

    } catch (error) {
        console.log(error)
        return res.json({
            error: error.message
        })
    }
}
module.exports = deleteUserBankAccountController