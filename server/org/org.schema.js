const { Schema } = require('mongodb');

const orgSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    
})