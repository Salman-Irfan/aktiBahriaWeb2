const mongoose = require('mongoose');

const { Schema } = mongoose;

const bankAccountSchema = new Schema({
    accountNumber: String,
    accountTitle: String, // String is shorthand for {type: String}
    referencePerson: String,
    accountType: String,
    balance: Number,
    sourceOfIncome: String,
}, {
    timestamps: true
});

const BankAccount = mongoose.model('bankAccounts', bankAccountSchema);

module.exports = BankAccount;