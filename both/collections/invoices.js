this.Invoices = new Mongo.Collection("invoices");

this.Invoices.userCanInsert = function(userId, doc) {
	return true;
};

this.Invoices.userCanUpdate = function(userId, doc) {
	return true;
};

this.Invoices.userCanRemove = function(userId, doc) {
	return true;
};
