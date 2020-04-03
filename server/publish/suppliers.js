Meteor.publish("supplier_list", function() {
	return Suppliers.find({}, {});
});

Meteor.publish("suppliers_null", function() {
	return Suppliers.find({_id:null}, {});
});

Meteor.publish("supplier", function(supplierId) {
	return Suppliers.find({_id:supplierId}, {});
});

Meteor.publish("supplier_list1", function() {
	return Suppliers.find({}, {});
});

Meteor.publish("suppliers_null1", function() {
	return Suppliers.find({_id:null}, {});
});

Meteor.publish("supplier1", function(supplierId) {
	return Suppliers.find({_id:supplierId}, {});
});

Meteor.publish("supplier_list_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return Suppliers.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("supplier_list_paged_count", function(extraOptions) {
	Counts.publish(this, "supplier_list_paged_count", Suppliers.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"supplierListPagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = Suppliers.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

Meteor.publish("supplier_list1_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return Suppliers.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("supplier_list1_paged_count", function(extraOptions) {
	Counts.publish(this, "supplier_list1_paged_count", Suppliers.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"supplierList1PagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = Suppliers.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

