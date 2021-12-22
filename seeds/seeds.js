const sequelize = require("../config/connection");
const { User, Game } = require("../models");

const userData = require("./userData.json");
const gameData = require("./gameData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  // Creating games and pulling info from the NHL database;
  for (const game of gameData) {
    await Game.create({
     status: game.status,
     home_name: game.home.name,
     home_alias: game.home.alias,
     home_points: game.home_points,
     away_name: game.away.name,
     away_alias: game.away.alias,
     away_points: game.away_points,
     date_played: game.scheduled,
     broadcasts: game.broadcasts
    //  get broadcasts in as an object?
    });
  }

  process.exit(0);
};

seedDatabase();
