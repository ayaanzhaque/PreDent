function initMap() {
  var latArray = [-25.363, -25.463, -25.563];
  var longArray = [131.044, 131.144, 131.244];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -25.363, lng: 131.044}
  });

for (var i = 0; i < 5; i++) {

  var marker = new google.maps.Marker({
    position: {lat: latArray[i], lng: longArray[i]},
    map: map,
    title: 'Hello World!',
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });


}

}

function initMapOriginal() {
  var latArray = [-25.363, -25.463, -25.563];
  var longArray = [131.044, 131.144, 131.244];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -25.363, lng: 131.044}
  });

for (var i = 0; i < 5; i++) {

  var marker = new google.maps.Marker({
    position: {lat: latArray[i], lng: longArray[i]},
    map: map,
    title: 'Hello World!',
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });


}

}
