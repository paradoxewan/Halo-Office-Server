this.Suppliers = new Mongo.Collection("suppliers");

this.Suppliers.userCanInsert = function(userId, doc) {
	return true;
};

this.Suppliers.userCanUpdate = function(userId, doc) {
	return true;
};

this.Suppliers.userCanRemove = function(userId, doc) {
	return true;
};
