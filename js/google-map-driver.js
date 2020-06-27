function initMap() {

var givenLatitude = parseInt(document.getElementById("forcedLatitude").value);
var givenLongitude = parseInt(document.getElementById("forcedLongitude").value);

var latArray = [40.7608, 40.8608];
var longArray = [-111.8910, -111.9910];
  var givenCenter = {lat: 40.7608, lng: -111.8910};


latArray.push(givenLatitude);
longArray.push(givenLongitude);


  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: givenCenter
  });

  for (i = 0; i < latArray.length; i++) {
  placeMarker(latArray[i], longArray[i], map);
  }

}



function placeMarker(givenLat, givenLong, map) {
    var marker = new google.maps.Marker({
        position: {lat: givenLat, lng: givenLong},
        map: map,
        draggable:true
    });
}
