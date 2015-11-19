var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/projects');

// get all projects
router.get('/projects', function (req, res, next) {
    Project.find(function (err, projects) {
        res.json({
            SUCCESS: projects
        });
    })
});

// get single project
router.get('/project/:id', function (req, res, next) {
    Project.findById(req.params.id, function (err, project) {
        res.json({
            'SUCCESS': project
        });
    })
});

// add single project
router.post('/projects', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

// update single project
router.put('/project/:id', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

//delete single project
router.delete('/project/:id', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;