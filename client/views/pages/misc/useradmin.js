if (Meteor.isClient) {
    // This code only runs on the client
    Meteor.subscribe("userList");
    Meteor.subscribe("allRoles");
    Template.userList.helpers({
        allUsers: function() {
          return Meteor.users.find();
        },
        userRoles: function() {
          return this.roles;
        },
        allRoles: function() {
          return Roles.getAllRoles();
        },
    });
}

if(Meteor.isServer) {
  Meteor.publish("userList", function() {
    return Meteor.users.find({}, {fields: {username: 1, profile: 1, roles: 1}});
  });
  Meteor.publish("allRoles", function(){
    return Roles.getAllRoles();
  });
}
