const { Schema } = require('mongodb');

const orgSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    industry: {
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
    
})