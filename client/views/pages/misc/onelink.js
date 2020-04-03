


Template.onelink.helpers({



  getonelink: function() {
  try {
      // this function checks for formtted address for gecoded array
      var thedata ='';
      Meteor.call('scrapeonelink',thedata,function(err, response) {
      console.log(response);
        return response;
      });
        }

        catch (error){ return error;}
   
  },

});
