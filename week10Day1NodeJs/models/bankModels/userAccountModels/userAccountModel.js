const mongoose = require('mongoose');
const { Schema } = mongoose;

const userAccountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        unique: true,
    },
    initialBalance: Number,
    idType: String,
    sourceOfIncome: String,
    totalBalance: Number,
}, {
    timestamps: true
});

const UserAccountModel = mongoose.model(`bankaccounts`, userAccountSchema)
module.exports = UserAccountModel;