const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    createCourse,
    getCourses,
    getSingleCourse,
    updateCourse,
    deleteCourse
} = require("../controllers/courseController");

router.post("/", authMiddleware, createCourse);

router.get("/", getCourses);

router.get("/:id", getSingleCourse);

router.put("/:id", authMiddleware, updateCourse);

router.delete("/:id", authMiddleware, deleteCourse);

module.exports = router;