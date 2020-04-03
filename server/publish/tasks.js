Meteor.publish("task_list", function() {
	return Tasks.find({}, {});
});

Meteor.publish("tasks_null", function() {
	return Tasks.find({_id:null}, {});
});

Meteor.publish("task", function(taskId) {
	return Tasks.find({_id:taskId}, {});
});

Meteor.publish("task_list_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return Tasks.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("task_list_paged_count", function(extraOptions) {
	Counts.publish(this, "task_list_paged_count", Tasks.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"taskListPagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = Tasks.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

