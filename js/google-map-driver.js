function initMap() {

var givenLatitude = parseInt(document.getElementById("forcedLatitude").value);
var givenLongitude = parseInt(document.getElementById("forcedLongitude").value);
var weather = document.getElementById("forcedWeather").value;
var speedLimit = document.getElementById("forcedSpeed").value;
var roadSigns = document.getElementById("roadSignsS").value;
var roadShape = document.getElementById("roadShapes").value;

var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<div id="bodyContent">'+
            '<p><b>Weather:</b> ' + weather +
            '<p><b>Speed Limit:</b> ' + speedLimit +
            '<p><b>Road Signs:</b> '+ roadSigns +
            '<p><b>Road Shape:</b> '+ roadShape + 
            '</div>';


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
  placeMarker(latArray[i], longArray[i], map, contentString);
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
