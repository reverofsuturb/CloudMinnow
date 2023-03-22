const { User } = require('../models');

const userdata = [
  {
    username: 'flyigpotato',
    email: 'flyigpotato@yahoo.com',
    password:'linuxid1',
    has_pets: true,
  },
  {
    username: 'runningdog',
    email: 'runningdog@yahoo.com',
    password:'linuxi123',
    has_pets: false,
  },
  {
    username: 'happycat',
    email: 'happycat@yahoo.com',
    password:'linux321',
    has_pets: true,
  },
  {
    username: 'catsjoy',
    email: 'catsjoy@yahoo.com',
    password:'123uxid1',
    has_pets: true,
  },
  {
    username: 'dogsdream',
    email: 'dogsdream@yahoo.com',
    password:'lin123d1',
    has_pets: true,
  },
  {
    username: 'catsanddogs',
    email: 'catsanddogs@yahoo.com',
    password:'linux987',
    has_pets: true,
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;