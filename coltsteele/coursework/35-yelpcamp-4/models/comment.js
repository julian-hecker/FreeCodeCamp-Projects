const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    author: String,
    text: String
});

const Comment = mongoose.model('comments', commentSchema);

module.exports = Comment;
