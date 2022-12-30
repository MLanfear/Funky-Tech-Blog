const { User } = require('../models');

const UserData = [
    {
        username: 'MLanfear',
        password: 'password'
    },
    {
        username: 'eileenP',
        password: 'password'
    },
    {
        username: 'avapepple24',
        password: 'password'
    },
    {
        username: 'dafunk24',
        password: 'password'
    },
    {
        username: 'ashlanfear',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(UserData, { individualHooks: true });

module.exports = seedUsers;