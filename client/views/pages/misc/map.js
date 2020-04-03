	//  Template.instance().subscribe( 'markers' );

Template.map.onRendered(function() {
  GoogleMaps.load( {
    v: '3', key: 'AIzaSyDMXxnK4TM6ZNvkdLhKdmPu3P6JkupiiGg',  libraries: 'geometry,places'
  } )
});



Template.map.helpers({
  exampleMapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(55.864237, -4.251806),
        zoom: 9
      }
    }
  },
    usersOnline() {  return Meteor.users.find({}) }
});





Template.map.onCreated(function() {
  Template.instance().subscribe( 'jobs' );
    GoogleMaps.ready('map', function(map) {
      
    

      var markers = {};

      Jobs.find({}).observe({
        added: function (document) {
        
         var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';
      


        var colour = 'blue';
              var textcolor  = 'white';
                //find all, because we've already subscribed to a specific range
            



                  if (document.jobstatus == 'booking'){
                    colour = 'red';
                    textcolor='white';
                  };

                  if (document.jobstatus == 'dispatched'){
                      colour = 'yellow';
                      textcolor='black';
                  };

                  if (document.jobstatus == 'on hold'){
                      colour = 'black';
                      textcolor='white';
                  };

                  if (document.jobstatus == 'accounts'){
                      colour = 'black';
                      textcolor='white';
                  };

                  if (document.jobstatus == 'on scene'){
                      colour = 'orange';
                      textcolor='white';
                  };

                      if (document.jobstatus == 'accepted'){
                          colour = 'blue';
                          textcolor='white';
                      };

                  if (document.jobstatus == 'job clear'){
                      colour = 'white';
                      textcolor='green';
                  };

                  if (document.jobstatus == 'complete'){
                      colour = 'green';
                      textcolor='white';
                  };
                  
                  if (document.reqparts == 'yes'){
                      colour = 'purple';
                      textcolor='white';
                  };
        
        
         new MapLabel({
            position: new google.maps.LatLng(document.reportedlocation.geopoint[1],document.reportedlocation.geopoint[0]),
            text:  document.aesref,
            map: GoogleMaps.maps['map'].instance,
            align: 'center',
            fontColor: textcolor,
            fontFamily: 'sans-serif',
            fontSize: 14,
            strokeWeight: 4,
            strokeColor: colour,
            zIndex: 14                
        });
   
        {
          var marker = new google.maps.Marker({
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(document.reportedlocation.geopoint[1],document.reportedlocation.geopoint[0]),
            map: map.instance,
            content: contentString,
            id: 'test'
          });
        }

          
          
          google.maps.event.addListener(marker, 'click', function(event) {
             markers[document._id] = marker;
            infowindow.open(map, marker);
            console.log(marker);
          });

      
        },
        changed: function (newDocument, oldDocument) {
          markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
        },
        removed: function (oldDocument) {
          markers[oldDocument._id].setMap(null);
          google.maps.event.clearInstanceListeners(markers[oldDocument._id]);
          delete markers[oldDocument._id];
        },
        
      });
    });
  });
