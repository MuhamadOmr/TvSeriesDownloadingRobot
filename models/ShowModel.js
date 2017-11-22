const mongoose = require('mongoose');

var ShowSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    quality: {
        type: String,
        require: true,
        trim: true,
    },
    resolution:{
        require: true,
        type: String,
        trim:true,
    },
    episode: {
        type: String,
        trim:true,
        require: true,

    }

});


var Show = mongoose.model('Show', ShowSchema);

module.exports = {Show: Show};
