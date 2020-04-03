this.Entries = new Mongo.Collection("entries");

this.Entries.userCanInsert = function(userId, doc) {
	return Users.isInRoles(userId, ["admin"]);
};

this.Entries.userCanUpdate = function(userId, doc) {
	return userId && (doc.createdBy == userId || Users.isInRoles(userId, ["admin"]));
};

this.Entries.userCanRemove = function(userId, doc) {
	return userId && Users.isInRoles(userId, ["admin"]);
};
