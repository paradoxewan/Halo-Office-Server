Meteor.publish("partner_list", function() {
	return Partners.find({}, {});
});

Meteor.publish("partners_null", function() {
	return Partners.find({_id:null}, {});
});

Meteor.publish("partner", function(partnerId) {
	return Partners.find({_id:partnerId}, {});
});

Meteor.publish("partner_list1", function() {
	return Partners.find({}, {});
});

Meteor.publish("partners_null1", function() {
	return Partners.find({_id:null}, {});
});

Meteor.publish("partner1", function(partnerId) {
	return Partners.find({_id:partnerId}, {});
});

Meteor.publish("partner_list1_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return Partners.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("partner_list1_paged_count", function(extraOptions) {
	Counts.publish(this, "partner_list1_paged_count", Partners.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"partnerList1PagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = Partners.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

