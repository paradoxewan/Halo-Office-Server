Meteor.publish("quvidibox_list", function() {
	return Quvidiboxes.find({}, {});
});

Meteor.publish("quvidiboxes_null", function() {
	return Quvidiboxes.find({_id:null}, {});
});

Meteor.publish("quvidibox", function(quvidiboxId) {
	return Quvidiboxes.find({_id:quvidiboxId}, {});
});

Meteor.publish("quvidibox_list_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return Quvidiboxes.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("quvidibox_list_paged_count", function(extraOptions) {
	Counts.publish(this, "quvidibox_list_paged_count", Quvidiboxes.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"quvidiboxListPagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = Quvidiboxes.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

