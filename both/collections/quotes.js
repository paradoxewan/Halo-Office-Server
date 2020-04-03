this.Quotes = new Mongo.Collection("quotes");

this.Quotes.userCanInsert = function(userId, doc) {
	return true;
};

this.Quotes.userCanUpdate = function(userId, doc) {
	return true;
};

this.Quotes.userCanRemove = function(userId, doc) {
	return true;
};
