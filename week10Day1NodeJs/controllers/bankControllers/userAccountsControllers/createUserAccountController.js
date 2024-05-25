const UserAccountModel = require("../../../models/bankModels/userAccountModels/userAccountModel")

const createUserAccountController = async(req, res) => {
    try {
        console.log(req.body)
        // 8000 - 27017 
        const newUserAccount = new UserAccountModel(req.body)
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