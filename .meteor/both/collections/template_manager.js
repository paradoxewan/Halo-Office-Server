this.TemplateManager = new Mongo.Collection("template_manager");

this.TemplateManager.userCanInsert = function(userId, doc) {
	return true;
};

this.TemplateManager.userCanUpdate = function(userId, doc) {
	return true;
};

this.TemplateManager.userCanRemove = function(userId, doc) {
	return true;
};
