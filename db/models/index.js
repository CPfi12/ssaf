var User = require('./users');
var ChatApp = require('./chat');
let Messages = require('./messages');
let Struggle = require('./struggle');

console.log('running this????');
ChatApp.belongsTo(User, {as: 'Mentor'});
ChatApp.belongsTo(User, {as: 'Mentee'});
Messages.belongsTo(ChatApp);
User.belongsToMany(Struggle, {through:'user_struggle'})
User.belongsToMany(User,{as:'Friends',through:'user_friends'})

module.exports = {
	User,
	ChatApp,
	Messages,
	Struggle
}