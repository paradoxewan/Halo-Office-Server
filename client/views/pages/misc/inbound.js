Template.inbound.onCreated( () => {
  Template.instance().subscribe( 'jobs' );
  Template.instance().subscribe( 'jobsheets' );
  Template.instance().subscribe( 'customers' );
  Template.instance().subscribe( 'vehicles' );
    Template.instance().subscribe( 'messages' );
});
Template.inbound.helpers({
  inbounddata() {

    var type = FlowRouter.getParam("thetype");
    var jobMessage = FlowRouter.getParam("message");
    var messageHeader = FlowRouter.getParam("messageHead");
    var messageType = FlowRouter.getParam("messageType");
    var messageSender = FlowRouter.getParam("messageFrom");
    var to = FlowRouter.getParam("messageTo");


    console.log('onlink message alert');
    console.log('Booking REQUESTED!');
    Messages.insert({messageFrom: messageSender,messageTo: "test",messageText: jobMessage,messagestatus: "sent",messageHead: messageHeader});
    return "ok";
  }

  });
