const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    instructor: {
        type: String,
        required: true
    },

    students: [{
        type: String
    }],

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Course", courseSchema);