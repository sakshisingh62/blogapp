const Course = require("../models/Course");

const createCourse = async (req, res) => {

    try {

        const course = await Course.create({
            ...req.body,
            createdBy: req.user.id
        });

        res.status(201).json(course);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const getCourses = async (req, res) => {

    try {

        const { category } = req.query;

        let filter = {};

        if (category) {
            filter.category = category;
        }

        const courses = await Course.find(filter);

        res.status(200).json(courses);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const getSingleCourse = async (req, res) => {

    try {

        const course = await Course.findById(req.params.id);

        if (!course) {

            return res.status(404).json({
                message: "Course not found"
            });

        }

        res.status(200).json(course);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const updateCourse = async (req, res) => {

    try {

        const course = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(course);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const deleteCourse = async (req, res) => {

    try {

        await Course.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Course Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createCourse,
    getCourses,
    getSingleCourse,
    updateCourse,
    deleteCourse
};