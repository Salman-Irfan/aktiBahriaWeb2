const mongoose = require('mongoose');
const { MONGO_DB_URL } = require('../../constants/mongoDB/mongoDbContants.js');

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(MONGO_DB_URL)
        console.log(`mongo db connected aktiBtcWeb2Db2`)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    connectToMongoDB
}