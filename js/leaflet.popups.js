// define icons, create popup content, add to map
// pedestrian icon
var pedIcon = L.icon({
iconUrl: "images/ped_yel.png",
iconSize: [15,15],
iconAnchor: [20, 20]
});
// bike icon
var bikIcon = L.icon({
iconUrl: "images/bike_yel.png",
iconSize: [20,20],
iconAnchor: [20, 20]
});
// record default icon
defIcon = L.Marker.prototype.options.icon;

// 1st is assigned default icon - this is the klugy solve
L.Marker.prototype.options.icon = bikIcon;
// function to bind name to popups
function onEachFeature(feature, layer) {
  // create popup content
  var content = '<b>' + feature.properties.name + '</b>' +
    '<p>Date: ' + feature.properties.date.slice(0,10) + ' </p>' +
    '<p>Age: ' + feature.properties.age + ' </p>' +
    '<p>Location: ' + feature.properties.city + ' </p>' +
    '<p>Link : <a href="' + feature.properties.link + '">Click Here</a></p>';
  // check mode and assign icon
  if (feature.properties.mode == "bicycle") {
      L.Marker.prototype.options.icon = bikIcon
      layer.bindPopup(content);
  } else {
      L.Marker.prototype.options.icon = pedIcon
      layer.bindPopup(content);
  }
}

// add fatal data points and with popups
 L.geoJson(fatalData, {
   onEachFeature: onEachFeature
 }).addTo(map);
// reset default icon
L.Marker.prototype.options.icon = defIcon;
