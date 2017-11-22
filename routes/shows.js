var express = require('express');
var env = process.env.NODE_ENV || 'd',
    config = require('../config')[env];
var mongoose = require('mongoose');
var router = express.Router();
var Show = require('../models/ShowModel').Show;




// if already authenticated will go to dashboard
router.get("/tvshows", function(req, res) {
    // list activity for all the episode has been downloaded


    // make a create section for the series that will ask for
    // the name example the good doctor
    // quality , example WEB or HDTV
    // 720 or 1080
    // the episode you want to be downloaded in the next days


    // make a remove section for the tvseries

});

// if already authenticated will go to dashboard
router.post("/tvshows", function(req, res) {
    // remove a tv series


    // add a new tv series to search for

});

module.exports = {router: router};