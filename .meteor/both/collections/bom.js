this.Bom = new Mongo.Collection("bom");

this.Bom.userCanInsert = function(userId, doc) {
	return true;
};

this.Bom.userCanUpdate = function(userId, doc) {
	return true;
};

this.Bom.userCanRemove = function(userId, doc) {
	return true;
};
