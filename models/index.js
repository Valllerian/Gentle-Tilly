const User = require('./User');
const Game = require('./Game');
const Comment = require('./Comment');

// Game/Team relations

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
  
module.exports = { User, Game, Comment };
