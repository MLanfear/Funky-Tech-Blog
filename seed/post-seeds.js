const { Post } = require('../models');

const postData = [
    {
        title: 'TEST TEST TEST TEST TEST TEST TEST ',
        body: 'TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST',
        user_id: 5
    },
    {
        title: 'Albert Einstein',
        body: 'I have no special talent. I am only passionately curious.',
        user_id: 3
    },
    {
        title: 'Buddha',
        body: 'All that we are is the result of what we have thought.',
        user_id: 1
    },
    {
        title: 'Steve Jobs',
        body: 'Stay hungry, stay foolish.',
        user_id: 2
    },
    {
        title: 'Malcolm X',
        body: 'The future belongs to those who prepare for it today.',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;