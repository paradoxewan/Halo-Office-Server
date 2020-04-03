Meteor.publish("template_list", function() {
	return Templates.find({}, {});
});

Meteor.publish("templates_null", function() {
	return Templates.find({_id:null}, {});
});

Meteor.publish("template", function(templateId) {
	return Templates.find({_id:templateId}, {});
});

Meteor.publish("template_list_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return Templates.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("template_list_paged_count", function(extraOptions) {
	Counts.publish(this, "template_list_paged_count", Templates.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"templateListPagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = Templates.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

