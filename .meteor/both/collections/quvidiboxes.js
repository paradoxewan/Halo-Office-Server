this.Quvidiboxes = new Mongo.Collection("quvidiboxes");

this.Quvidiboxes.userCanInsert = function(userId, doc) {
	return true;
};

this.Quvidiboxes.userCanUpdate = function(userId, doc) {
	return true;
};

this.Quvidiboxes.userCanRemove = function(userId, doc) {
	return true;
};
