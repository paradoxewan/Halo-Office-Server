this.Automation = new Mongo.Collection("automation");

this.Automation.userCanInsert = function(userId, doc) {
	return true;
};

this.Automation.userCanUpdate = function(userId, doc) {
	return true;
};

this.Automation.userCanRemove = function(userId, doc) {
	return true;
};
