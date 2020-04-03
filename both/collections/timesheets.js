this.Timesheets = new Mongo.Collection("timesheets");

this.Timesheets.userCanInsert = function(userId, doc) {
	return true;
};

this.Timesheets.userCanUpdate = function(userId, doc) {
	return true;
};

this.Timesheets.userCanRemove = function(userId, doc) {
	return true;
};
