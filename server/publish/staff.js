Meteor.publish("staff_list", function() {
	return Staff.find({}, {});
});

Meteor.publish("staffers_null", function() {
	return Staff.find({_id:null}, {});
});

Meteor.publish("staff", function(staffId) {
	return Staff.find({_id:staffId}, {});
});

Meteor.publish("staff_list_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return Staff.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("staff_list_paged_count", function(extraOptions) {
	Counts.publish(this, "staff_list_paged_count", Staff.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"staffListPagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = Staff.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

