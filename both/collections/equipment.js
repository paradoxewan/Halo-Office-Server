this.Equipment = new Mongo.Collection("equipment");

this.Equipment.userCanInsert = function(userId, doc) {
	return true;
};

this.Equipment.userCanUpdate = function(userId, doc) {
	return true;
};

this.Equipment.userCanRemove = function(userId, doc) {
	return true;
};
