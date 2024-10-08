const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    createdEvents: [
        {
            type: Schema.Types.ObjectId,
            // ref defines how two models are related
            ref: 'Event'
        }
    ]
});

//Connects to event.js
module.exports = mongoose.model('User', userSchema);