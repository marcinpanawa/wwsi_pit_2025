const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    deal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deal',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    value: {
        type: Number,
        required: true,
        enum: [1, -1] // 1 for upvote, -1 for downvote
    }
});

// Compound index to ensure a user can only vote once per deal
voteSchema.index({ deal: 1, user: 1 }, { unique: true });

module.exports = mongoose.model('Vote', voteSchema);
