Meteor.publish("entry_list", function() {
	if(Users.isInRoles(this.userId, ["admin"])) {
		return Entries.find({}, {});
	}
	return Entries.find({createdBy:this.userId}, {});
});

Meteor.publish("entries_null", function() {
	if(Users.isInRoles(this.userId, ["admin"])) {
		return Entries.find({_id:null}, {});
	}
	return Entries.find({_id:null,createdBy:this.userId}, {});
});

Meteor.publish("entry", function(entryId) {
	if(Users.isInRoles(this.userId, ["admin"])) {
		return Entries.find({_id:entryId}, {});
	}
	return Entries.find({_id:entryId,createdBy:this.userId}, {});
});

Meteor.publish("timesheet_list", function() {
	if(Users.isInRoles(this.userId, ["admin"])) {
		return Entries.find({}, {});
	}
	return Entries.find({createdBy:this.userId}, {});
});

Meteor.publish("timesheets_null", function() {
	if(Users.isInRoles(this.userId, ["admin"])) {
		return Entries.find({_id:null}, {});
	}
	return Entries.find({_id:null,createdBy:this.userId}, {});
});

Meteor.publish("timesheet", function(timesheetId) {
	if(Users.isInRoles(this.userId, ["admin"])) {
		return Entries.find({_id:timesheetId}, {});
	}
	return Entries.find({_id:timesheetId,createdBy:this.userId}, {});
});

Meteor.publish("entry_list_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	if(Users.isInRoles(this.userId, ["admin"])) {
		return Entries.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
	}
	return Entries.find(databaseUtils.extendFilter({createdBy:this.userId}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("entry_list_paged_count", function(extraOptions) {
	Counts.publish(this, "entry_list_paged_count", Entries.find(databaseUtils.extendFilter({createdBy:this.userId}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"entryListPagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		if(Users.isInRoles(this.userId, ["admin"])) {
			var data = Entries.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
			return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
		}
		var data = Entries.find(databaseUtils.extendFilter({createdBy:this.userId}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

Meteor.publish("timesheet_list_paged", function(extraOptions) {
	extraOptions.doSkip = true;
	if(Users.isInRoles(this.userId, ["admin"])) {
		return Entries.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
	}
	return Entries.find(databaseUtils.extendFilter({createdBy:this.userId}, extraOptions), databaseUtils.extendOptions({}, extraOptions));
});

Meteor.publish("timesheet_list_paged_count", function(extraOptions) {
	Counts.publish(this, "timesheet_list_paged_count", Entries.find(databaseUtils.extendFilter({createdBy:this.userId}, extraOptions), { fields: { _id: 1 } }));
});

Meteor.methods({
	"timesheetListPagedExport": function(extraOptions, exportFields, fileType) {
		extraOptions.noPaging = true;
		if(Users.isInRoles(this.userId, ["admin"])) {
			var data = Entries.find(databaseUtils.extendFilter({}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
			return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
		}
		var data = Entries.find(databaseUtils.extendFilter({createdBy:this.userId}, extraOptions), databaseUtils.extendOptions({}, extraOptions)).fetch();
		return objectUtils.exportArrayOfObjects(data, exportFields, fileType);
	}
});

