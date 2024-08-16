const express = require('express');
const Project = require('../models/Project');
const authMiddleware = require('../middleware/authMiddleware');  // Correct import
const router = express.Router();

// Routes using the authMiddleware
router.get('/', authMiddleware, async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

router.post('/', authMiddleware, async (req, res) => {
    const { name } = req.body;

    try {
        const newProject = new Project({ name });
        await newProject.save();
        res.json(newProject);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
