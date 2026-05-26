const Learning = require("../models/Learning");

const createLearning = async (req, res) => {
    try {
        const learning = await Learning.create(req.body);
        res.status(201).json(learning);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getLearnings = async (req, res) => {
    try {
        const learnings = await Learning.find({});
        res.status(200).json(learnings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSingleLearning = async (req, res) => {
    try {
        const learning = await Learning.findById(req.params.id);
        if (!learning) return res.status(404).json({ message: "Learning not found" });
        res.status(200).json(learning);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateLearning = async (req, res) => {
    try {
        const learning = await Learning.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(learning);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteLearning = async (req, res) => {
    try {
        await Learning.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Learning Deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createLearning,
    getLearnings,
    getSingleLearning,
    updateLearning,
    deleteLearning
};
