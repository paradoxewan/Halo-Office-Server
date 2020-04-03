Meteor.publish("automation_list", function() {
	return Automation.find({}, {});
});

Meteor.publish("automations_null", function() {
	return Automation.find({_id:null}, {});
});

Meteor.publish("automation", function(automationId) {
	return Automation.find({_id:automationId}, {});
});

Meteor.publish("automation_list_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return Automation.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("automation_list_paged_count", function(extraOptions) {
	Counts.publish(this, "automation_list_paged_count", Automation.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"automationListPagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = Automation.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

