const User = require('./User');
const Game = require('./Game');
const Comment = require('./Comment');
const Team = require('./Team');

// Game/Team relations
Game.hasMany(Team,{
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
  });

Team.belongsTo(Game, {
    foreignKey: 'game_id'
  });
  
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Game.hasMany(Comment, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});
  
  Comment.belongsTo(Game, {
    foreignKey: 'game_id'
});




module.exports = { User, Game, Comment, Team };
