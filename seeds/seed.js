const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./usersData.json');
const postData = require('./postsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({ ...post, user_id: users[Math.floor(Math.random() * users.length)].id, });
  }

  process.exit(0);
};

seedDatabase();
