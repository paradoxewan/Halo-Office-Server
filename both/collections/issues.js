this.Issues = new Mongo.Collection("issues");

this.Issues.userCanInsert = function(userId, doc) {
	return true;
};

this.Issues.userCanUpdate = function(userId, doc) {
	return true;
};

this.Issues.userCanRemove = function(userId, doc) {
	return true;
};
