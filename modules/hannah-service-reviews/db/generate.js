// DATA GENERATOR FILE
const faker = require('faker');

// create a fake user
const createFakeUser = () => ({
  username: faker.internet.userName(),
  avatar: faker.image.avatar(),
});
// create a fake review
const createFakeReview = () => ({
  user_id: faker.random.number({ 'min': 1, 'max': 10000000 }),
  book_id: faker.random.number({ 'min': 1, 'max': 10000000 }),
  date: `${faker.date.month()} ${faker.random.number({ 'min': 1, 'max': 30 })}, ${faker.random.number({ 'min': 1996, 'max': 2019 })}`,
  review: faker.lorem.paragraph(),
  rating: faker.random.number({ min: 1, max: 5 }),
});

const generateManyUsers = () => {
  const users = [];
  const desiredNumber = 10000000;
  for (let i = 0; i < desiredNumber; i++) {
    users.push(createFakeUser());
  }
  return users;
};

module.exports = {
  createFakeUser: createFakeUser,
  createFakeReview: createFakeReview,
  generateManyUsers: generateManyUsers,
};

