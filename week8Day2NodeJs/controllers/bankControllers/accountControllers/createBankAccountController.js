const BankAccount = require("../../../models/bankModel")

const createBankAccountController = async (req, res) => {
    try {
        const  {accountNumber, accountTitle, referencePerson, accountType, balance, sourceOfIncome}  = req.body
        let customNum = `abcBank-${accountNumber}-${accountTitle}`

        const newUserAccount = new BankAccount({
            accountNumber: customNum,
            accountTitle,
            referencePerson,
            accountType,
            balance,
            sourceOfIncome
        })
        await newUserAccount.save()

        return res.json({
            success: true,
            message: `bank accoutncreated successfully`,
            data: newUserAccount
        })
    } catch (error) {
        console.log(error)
    }

}
module.exports = createBankAccountController