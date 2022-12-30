const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Labore ex amet dolore reprehenderit est aute dolor dolor fugiat.',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'When on the ladder of success, don’t let boys look up your dress!',
        user_id: 4,
        post_id: 5
    },
    {
        comment_text: 'Time is a great teacher, but unfortunately it kills all its pupils.',
        user_id: 2,
        post_id: 5
    },
    {
        comment_text: 'Children really brighten up a household. They never turn the lights off.',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'I always wanted to be somebody, but now I realize I should have been more specific.',
        user_id: 1,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;