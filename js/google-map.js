// This example creates a custom overlay called USGSOverlay, containing
      // a U.S. Geological Survey (USGS) image of the relevant area on the map.

      // Set the custom overlay object's prototype to a new instance
      // of OverlayView. In effect, this will subclass the overlay class therefore
      // it's simpler to load the API synchronously, using
      // google.maps.event.addDomListener().
      // Note that we set the prototype to an instance, rather than the
      // parent class itself, because we do not wish to modify the parent class.

      var overlay;
      USGSOverlay.prototype = new google.maps.OverlayView();

      // Initialize the map and the custom overlay.

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: {lat: 40.7608, lng: -111.8910},
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
          /*styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]*/
        });

        var bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(40.718712, -112.068841),
            new google.maps.LatLng(40.837364, -111.787317));

        // The photograph is courtesy of the U.S. Geological Survey.
        var srcImage = '/Users/viraajreddi/Desktop/datday/images/accidentRiskMap.png';

        // The custom USGSOverlay object contains the USGS image,
        // the bounds of the image, and a reference to the map.
        overlay = new USGSOverlay(bounds, srcImage, map);
      }

      /** @constructor */
      function USGSOverlay(bounds, image, map) {

        // Initialize all properties.
        this.bounds_ = bounds;
        this.image_ = image;
        this.map_ = map;

        // Define a property to hold the image's div. We'll
        // actually create this div upon receipt of the onAdd()
        // method so we'll leave it null for now.
        this.div_ = null;

        // Explicitly call setMap on this overlay.
        this.setMap(map);
      }

      /**
       * onAdd is called when the map's panes are ready and the overlay has been
       * added to the map.
       */
      USGSOverlay.prototype.onAdd = function() {

        var div = document.createElement('div');
        div.style.borderStyle = 'none';
        div.style.borderWidth = '0px';
        div.style.position = 'absolute';

        // Create the img element and attach it to the div.
        var img = document.createElement('img');
        img.src = this.image_;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.position = 'absolute';
        div.appendChild(img);

        this.div_ = div;

        // Add the element to the "overlayLayer" pane.
        var panes = this.getPanes();
        panes.overlayLayer.appendChild(div);
      };

      USGSOverlay.prototype.draw = function() {

        // We use the south-west and north-east
        // coordinates of the overlay to peg it to the correct position and size.
        // To do this, we need to retrieve the projection from the overlay.
        var overlayProjection = this.getProjection();

        // Retrieve the south-west and north-east coordinates of this overlay
        // in LatLngs and convert them to pixel coordinates.
        // We'll use these coordinates to resize the div.
        var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
        var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

        // Resize the image's div to fit the indicated dimensions.
        var div = this.div_;
        div.style.left = sw.x + 'px';
        div.style.top = ne.y + 'px';
        div.style.width = (ne.x - sw.x) + 'px';
        div.style.height = (sw.y - ne.y) + 'px';
      };

      // The onRemove() method will be called automatically from the API if
      // we ever set the overlay's map property to 'null'.
      USGSOverlay.prototype.onRemove = function() {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
      };

      // Set the visibility to 'hidden' or 'visible'.
USGSOverlay.prototype.hide = function() {
  if (this.div_) {
    // The visibility property must be a string enclosed in quotes.
    this.div_.style.visibility = 'hidden';
  }
};

USGSOverlay.prototype.show = function() {
  if (this.div_) {
    this.div_.style.visibility = 'visible';
  }
};

USGSOverlay.prototype.toggle = function() {
  if (this.div_) {
    if (this.div_.style.visibility === 'hidden') {
      this.show();
    } else {
      this.hide();
    }
  }
};

// Detach the map from the DOM via toggleDOM().
// Note that if we later reattach the map, it will be visible again,
// because the containing <div> is recreated in the overlay's onAdd() method.
USGSOverlay.prototype.toggleDOM = function() {
  if (this.getMap()) {
    // Note: setMap(null) calls OverlayView.onRemove()
    this.setMap(null);
  } else {
    this.setMap(this.map_);
  }
};

      google.maps.event.addDomListener(window, 'load', initMap);




/* var contentString1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Kathleen Russ: MA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Type:</b> Psychotherapist' +
      '<p><b>Availability:</b> 6/20/2020-6/30/2020, 10:00am - 6pm'+
      '<p><b>Bio Message:</b> I specialize in Jungian Psychotherapy, Aging & Caregiving, and Expressive Arts in my Therapy Treatments'+
    '</div>'+
      '</div>';
      var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
      });
      var marker1 = new google.maps.Marker({
        position: kathleen,
        map: map,
      });
      marker1.addListener('click', function() {
        infowindow1.open(map, marker1);
      });
      var contentString2 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Shereen Mohsen, Psy.D.</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Type: </b>  Licensed Clinical Psychologist:' +
          '<p><b>Preferred Dates:</b> 6/30/2020-7/7/2020, 9:00am - 5:30pm'+
          '<p><b>Bio Message:</b> I work on Individual Counseling, Marriage and Family, Consultation, Health and Wellness, Crisis Intervention / Trauma, and Education / Schooling'+
        '</div>'+
          '</div>';
          var infowindow2 = new google.maps.InfoWindow({
            content: contentString2
          });
          var marker2 = new google.maps.Marker({
            position: shereen,
            map: map,
          });
          marker2.addListener('click', function() {
            infowindow2.open(map, marker2);
          });
          var contentString3 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Anne Bisek, Psy.D.</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Type: </b> Licensed Clinical Psychologist:' +
          '<p><b>Preferred Dates:</b> 6/25/2020-7/10/2020, 9:00am - 5:30pm'+
          '<p><b>Bio Message:</b> I work primarily with first responders, communications, firefighters, pre-hospital care personnel, law enforcement and military veterans.'+
        '</div>'+
          '</div>';
              var infowindow3 = new google.maps.InfoWindow({
                content: contentString3
              });
              var marker3 = new google.maps.Marker({
                position: anne,
                map: map,
              });
              marker3.addListener('click', function() {
                infowindow3.open(map, marker3);
              });
              var contentString4 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Martin H. Williams, Ph.D.</h1>'+
              '<div id="bodyContent">'+
              '<p><b>Type: </b> Licensed Clinical Psychologist, American Psychological Association:' +
              '<p><b>Preferred Dates:</b> 6/25/2020-7/10/2020, 9:00am - 5:30pm'+
              '<p><b>Bio Message:</b> I do evaluations of emotional damage deriving from personal injury, sexual or racial harassment and sexual abuse (including in psychotherapy) using objective psychological assessment devices'+
            '</div>'+
              '</div>';
                  var infowindow4 = new google.maps.InfoWindow({
                    content: contentString4
                  });
                  var marker4 = new google.maps.Marker({
                    position: williams,
                    map: map,
                  });
                  marker4.addListener('click', function() {
                    infowindow4.open(map, marker4);
                  });
                  var contentString5 = '<div id="content">'+
                  '<div id="siteNotice">'+
                  '</div>'+
                  '<h1 id="firstHeading" class="firstHeading">Rayna Lumbard: LMFT</h1>'+
                  '<div id="bodyContent">'+
                  '<p><b>Type: </b> Licensed Clinical Psychologist' +
                  '<p><b>Preferred Dates:</b> 6/22/2020-7/5/2020, 11:00am - 7:30pm'+
                  '<p><b>Bio Message:</b> I provide the tools to raise your self=worth, your InnerSuccess, the foundation to accomplish your goals and dreams in your relationships, career, health and finances. '+
                '</div>'+
                  '</div>';
                      var infowindow5 = new google.maps.InfoWindow({
                        content: contentString5
                      });
                      var marker5 = new google.maps.Marker({
                        position: rayna,
                        map: map,
                      });
                      marker5.addListener('click', function() {
                        infowindow5.open(map, marker5);
                      });
*/
