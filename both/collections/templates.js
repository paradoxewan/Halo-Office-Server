this.Templates = new Mongo.Collection("templates");

this.Templates.userCanInsert = function(userId, doc) {
	return true;
};

this.Templates.userCanUpdate = function(userId, doc) {
	return true;
};

this.Templates.userCanRemove = function(userId, doc) {
	return true;
};
