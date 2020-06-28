function initMap() {

var latArray = [40.764818, 40.774152, 40.776643, 40.781971, 40.745517, 40.743802, 40.740505, 40.771461, 40.771225,
40.780857, 40.782345, 40.760634, 40.760885, 40.760341, 40.758940, 40.760729, 40.747070, 40.749776, 40.750802,
40.751943, 40.752622, 40.754157, 40.754437, 40.756781];

var longArray = [-111.965577, -111.949198, -111.949101, -111.949313, -111.948954, -111.949146, -111.949324, -111.911106,
  -111.894109, -111.910951, -111.902568, -111.914381, -111.915209, -111.913635, -111.913138, -111.905964, -111.902885,
  -111.909470, -111.910643, -111.910571, -111.911181, -111.911145, -111.911588, -111.912618];

var contentString = ['<h2>Wah.</h2>', '<h2>Waah.</h2>', '<h2>Waaah.</h2>', '<h2>Waaaaaaaah.</h2>', '<h2>Shaaaa</h2>', '<h2>Uluru</h2>',
'<h2>Uluru</h2>', '<h2>Waaaaaaaah</h2>', '<h2>Waaaaaaaah</h2>', '<h2>Uluru</h2>', '<h2>Uluru</h2>', '<h2>Shaaaa</h2>', '<h2>Uluru</h2>',
'<h2>Waaaaaaaah</h2>', '<h2>Uluru</h2>', '<h2>Shaaaa</h2>', '<h2>Uluru</h2>', '<h2>Shaaaa</h2>', '<h2>Uluru</h2>', '<h2>Shaaaa</h2>',
'<h2>Waaaaaaaah</h2>', '<h2>Shaaaa</h2>', '<h2>Uluru</h2>', '<h2>Shaaaa</h2>'];

var givenCenter = {lat: 40.765287, lng: -111.931735};





  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: givenCenter
  });

  for (i = 0; i < latArray.length; i++) {
  placeMarker(latArray[i], longArray[i], map, contentString[0]);
  }

}



function placeMarker(givenLat, givenLong, map, givenContent) {

        var infowindow = new google.maps.InfoWindow({
          content: givenContent
        });

        var marker = new google.maps.Marker({
            position: {lat: givenLat, lng: givenLong},
            map: map,
            title: 'GIVEEEEN MEEEAAAPP'
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

}
