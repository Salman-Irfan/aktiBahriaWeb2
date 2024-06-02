const BankAccounts = require("../../../models/bankModels/userAccountModels/userAccountModel")

const createUserAccountController = async(req, res) => {
    try {
        
        // 8000 - 27017 
        const newUserAccount = new BankAccounts(req.body)
        await newUserAccount.save()
        return res.json({
            success: true,
            message: `account created successfully`,
            details: newUserAccount
        })
    } catch (error) {
        console.log(error)
        return res.json({
            error: error.message
        })
    }
    
}
module.exports = createUserAccountController