const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    newsType: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    texts: [{
        type: String
    }],
    created_at: {
        type: Date,
        default: Date.now
    },
    img_principal: {
        type: String,
        required: true
    },
    img_secundaria: {
        type: String,
        required: true
    },
    text_type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("News", newsSchema);