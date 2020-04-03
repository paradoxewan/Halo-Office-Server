Meteor.publish("client_list", function() {
	return Clients.find({}, {});
});

Meteor.publish("clients_null", function() {
	return Clients.find({_id:null}, {});
});

Meteor.publish("client", function(clientId) {
	return Clients.find({_id:clientId}, {});
});

Meteor.publish("client_list_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return Clients.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("client_list_paged_count", function(extraOptions) {
	Counts.publish(this, "client_list_paged_count", Clients.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"clientListPagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = Clients.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

