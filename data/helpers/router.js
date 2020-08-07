const express = require("express");

const Actions = require("./actionModel.js");
const Projects = require("./projectModel.js");

const router = express.Router();

router.get("/projects/:id", (req, res) => {
    Projects.get(req.id)
        .then( projects => {
            res.status(200).json(projects);
        })
        .catch( error => {
            console.log(error);
            res.status(500).json({
                message: "Error finding the projects"
            });
        });
});

router.post("/projects", (req, res) => {
    Projects.insert(req.body)
        .then( project => {
            res.status(201).json(project);
        })
        .catch( error => {
            console.log(error);
            res.status(500).json({
                message: "Error adding the project"
            });
        });
});

router.delete("/", (req, res) => {
    Projects.remove(req.id)
        .then( gone => {
            res.status(200).json({ 
                message: "This project went bye bye"
            });
        })
        .catch( error => {
            console.log(error);
            res.status(500).json({
                message: "Error sending this thing to the shadow realm"
            });
        });
});

// -------------------------

router.get("/actions/:id", (req, res) => {
    Actions.get(req.id)
        .then( action => {
            res.status(200).json(action);
        })
        .catch( error => {
            console.log(error);
            res.status(500).json({
                message: "Error finding the action"
            });
        });
});

router.post("/actions", (req, res) => {
    Actions.insert(req.body)
        .then( project => {
            res.status(201).json(project);
        })
        .catch( error => {
            console.log(error);
            res.status(500).json({
                message: "Error adding the action"
            });
        });
});

router.delete("/", (req, res) => {
    Actions.remove(req.id)
        .then( gone => {
            res.status(200).json({ 
                message: "This action went bye bye"
            });
        })
        .catch( error => {
            console.log(error);
            res.status(500).json({
                message: "Error sending this thing to the shadow realm"
            });
        });
});


module.exports = router;