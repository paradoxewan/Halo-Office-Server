this.Clients = new Mongo.Collection("clients");

this.Clients.userCanInsert = function(userId, doc) {
	return true;
};

this.Clients.userCanUpdate = function(userId, doc) {
	return true;
};

this.Clients.userCanRemove = function(userId, doc) {
	return true;
};
