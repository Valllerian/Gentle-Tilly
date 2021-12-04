const sequelize = require("../config/connection");
const { User, Game } = require("../models");

const userData = require("./userData.json");
const gameData = require("./gameData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  for (const game of gameData) {
    await Game.create({
     status: game.status,
     home_name: game.home.name,
     home_alias: game.home.alias,
     away_name: game.away.name,
     away_alias: game.away.alias,
     date_played: game.scheduled
    });
  }

  process.exit(0);
};

seedDatabase();
