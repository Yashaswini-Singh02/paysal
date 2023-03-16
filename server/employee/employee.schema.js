const { Schema } = require('mongodb');

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    walletAddress: {
        type: String,
        required: true
    },
    orgId: {
        type: String,
        required: true
    }
})
