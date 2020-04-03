Meteor.publish("add_on_list", function() {
	return AddOnProducts.find({}, {});
});

Meteor.publish("add_ons_null", function() {
	return AddOnProducts.find({_id:null}, {});
});

Meteor.publish("add_on", function(addOnId) {
	return AddOnProducts.find({_id:addOnId}, {});
});

Meteor.publish("add_on_list_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return AddOnProducts.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("add_on_list_paged_count", function(extraOptions) {
	Counts.publish(this, "add_on_list_paged_count", AddOnProducts.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"addOnListPagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = AddOnProducts.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

