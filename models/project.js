/*
 The Project model
 */

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var ProjectDate = new Schema({
	date: Date,
	contributors: [String]
});

var Project = new Schema({
    name:  String,
    description: String,
    slug: String,
    created_by: String,
    created: {type: Date, default: Date.now},
    contributors: [String]
    dates: [ProjectDate]
});

module.exports = mongoose.model('Project', Project);