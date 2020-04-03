Template.dvla.helpers({
  location: function () {
    return Session.get('location');
  }
});
Template.dvla.events({
  'click button': function (evt, tpl) {
      var registration = tpl.find('input#ipv4').value;

      console.log(registration);
    Meteor.call('dvlasearch', registration, function (err, res) {
      // The method call sets the Session variable to the callback value
      if (err) {
        Session.set('location', {error: err});
      } else {
        Session.set('location', res);
        return res;
      }
    });
  }
});
