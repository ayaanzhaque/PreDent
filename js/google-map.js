function initMap() {
  var latArray = [-25.363, -25.463, -25.563];
  var longArray = [131.044, 131.144, 131.244];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -25.363, lng: 131.044}
  });

  var marker = new google.maps.Marker({
    position: {lat: latArray[0], lng: longArray[0]},
    map: map,
    title: 'Hello World!'
  });
}
