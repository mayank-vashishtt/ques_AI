const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    episodes: { type: Number, default: 0 },
    lastEdited: { type: Date, default: Date.now },
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
