Meteor.publish("project_list", function() {
	return Projects.find({}, {});
});

Meteor.publish("projects_null", function() {
	return Projects.find({_id:null}, {});
});

Meteor.publish("project", function(projectId) {
	return Projects.find({_id:projectId}, {});
});

Meteor.publish("project_list_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return Projects.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("project_list_paged_count", function(extraOptions) {
	Counts.publish(this, "project_list_paged_count", Projects.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"projectListPagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = Projects.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

