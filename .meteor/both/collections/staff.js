this.Staff = new Mongo.Collection("staff");

this.Staff.userCanInsert = function(userId, doc) {
	return true;
};

this.Staff.userCanUpdate = function(userId, doc) {
	return true;
};

this.Staff.userCanRemove = function(userId, doc) {
	return true;
};
