this.Tasks = new Mongo.Collection("tasks");

this.Tasks.userCanInsert = function(userId, doc) {
	return true;
};

this.Tasks.userCanUpdate = function(userId, doc) {
	return true;
};

this.Tasks.userCanRemove = function(userId, doc) {
	return true;
};
