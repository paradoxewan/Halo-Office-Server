Meteor.publish("bom_list", function() {
	return Bom.find({}, {});
});

Meteor.publish("boms_null", function() {
	return Bom.find({_id:null}, {});
});

Meteor.publish("bom", function(bomId) {
	return Bom.find({_id:bomId}, {});
});

Meteor.publish("bom_list_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return Bom.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("bom_list_paged_count", function(extraOptions) {
	Counts.publish(this, "bom_list_paged_count", Bom.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"bomListPagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = Bom.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

