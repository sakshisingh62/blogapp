const mongoose = require("mongoose");

const learningSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    author: { type: String },
    tags: [{ type: String }],
    published: { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model("Learning", learningSchema);
