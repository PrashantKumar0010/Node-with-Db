const mongoose = require('mongoose')
const PersonSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        require: true,
    }
})
PersonSchema.index({
    mobile: 1
}, { unique: true })
PersonSchema.index({
    email: 1
}, { unique: true })
const Person = mongoose.model('Person', PersonSchema)
module.exports = Person