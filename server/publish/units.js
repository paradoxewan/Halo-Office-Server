Meteor.publish("unit_list", function() {
	return Units.find({}, {});
});

Meteor.publish("units_null", function() {
	return Units.find({_id:null}, {});
});

Meteor.publish("unit", function(unitId) {
	return Units.find({_id:unitId}, {});
});

Meteor.publish("unit_list1", function() {
	return Units.find({}, {});
});

Meteor.publish("units_null1", function() {
	return Units.find({_id:null}, {});
});

Meteor.publish("unit1", function(unitId) {
	return Units.find({_id:unitId}, {});
});

Meteor.publish("unit_list1_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return Units.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("unit_list1_paged_count", function(extraOptions) {
	Counts.publish(this, "unit_list1_paged_count", Units.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"unitList1PagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = Units.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

