// gecoder script
if (!navigator.geolocation) {
  console.log("Your browser doesn't support geolocation feature!")
} else {
  navigator.geolocation.getCurrentPosition(getPosition);
};
var marker, circle, lat, long, accuracy;

function getPosition(position) {
  lat = position.coords.latitude
  long = position.coords.longitude
  accuracy = position.coords.accuracy

  if (marker) {
    map.removeLayer(marker)
  }

  if (circle) {
    map.removeLayer(circle)
  }

  marker = L.marker([lat, long])
  circle = L.circle([lat, long], { radius: accuracy })

  var featureGroup = L.featureGroup([marker, circle]).addTo(map)

  map.fitBounds(featureGroup.getBounds())

  console.log("Your coordinate is: Lat: " + lat + " Long: " + long + " Accuracy: " + accuracy)

}
