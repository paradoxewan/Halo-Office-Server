this.AddOnProducts = new Mongo.Collection("add_on_products");

this.AddOnProducts.userCanInsert = function(userId, doc) {
	return true;
};

this.AddOnProducts.userCanUpdate = function(userId, doc) {
	return true;
};

this.AddOnProducts.userCanRemove = function(userId, doc) {
	return true;
};
