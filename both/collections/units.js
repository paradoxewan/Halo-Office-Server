this.Units = new Mongo.Collection("units");

this.Units.userCanInsert = function(userId, doc) {
	return true;
};

this.Units.userCanUpdate = function(userId, doc) {
	return true;
};

this.Units.userCanRemove = function(userId, doc) {
	return true;
};
