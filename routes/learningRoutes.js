const express = require("express");
const router = express.Router();

const {
    createLearning,
    getLearnings,
    getSingleLearning,
    updateLearning,
    deleteLearning
} = require("../controllers/learningController");

// POST /learning
router.post("/", createLearning);

// GET /learning
router.get("/", getLearnings);

// GET /learning/:id
router.get("/:id", getSingleLearning);

// PUT /learning/:id
router.put("/:id", updateLearning);

// DELETE /learning/:id
router.delete("/:id", deleteLearning);

module.exports = router;
