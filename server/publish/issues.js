Meteor.publish("issue_list", function() {
	return Issues.find({}, {});
});

Meteor.publish("issues_null", function() {
	return Issues.find({_id:null}, {});
});

Meteor.publish("issue", function(issueId) {
	return Issues.find({_id:issueId}, {});
});

Meteor.publish("issue_list1", function() {
	return Issues.find({}, {});
});

Meteor.publish("issues_null1", function() {
	return Issues.find({_id:null}, {});
});

Meteor.publish("issue1", function(issueId) {
	return Issues.find({_id:issueId}, {});
});

Meteor.publish("issue_list1_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	return Issues.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("issue_list1_paged_count", function(extraOptions) {
	Counts.publish(this, "issue_list1_paged_count", Issues.find(databaseUtils.extendFilter({}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"issueList1PagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		var data = Issues.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

