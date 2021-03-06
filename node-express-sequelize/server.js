var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

app.get('/users', function(req,res){
	User.findAll().then(function(err,users){
		if(err){
			res.statusCode(404)
		}
		res.json(users)
	})
})

module.exports = { 
  app: app,
  User: User
};
