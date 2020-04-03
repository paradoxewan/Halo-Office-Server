Meteor.publish("sensors", function() {
	return Sensors.find({}, {});
});

Meteor.publish("sensors_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return Sensors.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("sensors_paged_count", function(extraOptions) {
	Counts.publish(this, "sensors_paged_count", Sensors.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"sensorsPagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = Sensors.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

