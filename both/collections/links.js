this.Links = new Mongo.Collection("links");

this.Links.userCanInsert = function(userId, doc) {
	return true;
};

this.Links.userCanUpdate = function(userId, doc) {
	return true;
};

this.Links.userCanRemove = function(userId, doc) {
	return true;
};
