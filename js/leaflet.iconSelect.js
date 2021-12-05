// change icons based on dropdown menu selection
// ped icon - unselected
var pedIcon = L.icon({
iconUrl: "images/ped_yel.png",
iconSize: [15,15],
iconAnchor: [20, 20]
});
// bike icon - unselected
var bikIcon = L.icon({
iconUrl: "images/bike_yel.png",
iconSize: [20,20],
iconAnchor: [20, 20]
});
// ped icon - selected
var pedIconS = L.icon({
iconUrl: "images/ped_org.png",
iconSize: [15,15],
iconAnchor: [20, 20]
});
// bike icon - selected
var bikIconS = L.icon({
iconUrl: "images/bike_org.png",
iconSize: [20,20],
iconAnchor: [20, 20]
});

// function to bind name to popups
function onEachFeature(feature, layer) {
    // create popup content
  var content = '<b>' + feature.properties.name + '</b>' +
    '<p>Date: ' + feature.properties.date.slice(0,10) + ' </p>' +
    '<p>Age: ' + feature.properties.age + ' </p>' +
    '<p>Location: ' + feature.properties.city + ' </p>' +
    '<p>Link : <a href="' + feature.properties.link + '">Click Here</a></p>';
  // check mode and assign icon
  // if (feature.properties.mode == mode.value || mode.value == "All") {

  if (mode.value == "Bicycle") {  // feature mode = dropdown mode
    if (feature.properties.mode == "bicycle") {
        layer.options.icon = bikIconS;
        layer.bindPopup(content);
    } else {
        layer.options.icon = pedIcon;
        layer.bindPopup(content);
    }};

    if (mode.value == "Pedestrian") {  // feature mode = dropdown mode
      if (feature.properties.mode == "bicycle") {
          layer.options.icon = bikIcon;
          layer.bindPopup(content);
      } else {
          layer.options.icon = pedIconS;
          layer.bindPopup(content);
      }};
  };

//   if (feature.properties.mode == mode.value) {  // feature mode = dropdown mode
//     if (feature.properties.mode == "bicycle") {
//         layer.options.icon = bikIconS;
//         layer.bindPopup(content);
//     } else {
//         layer.options.icon = pedIcon;
//         layer.bindPopup(content);
//     }
//   } else {
//     if (feature.properties.mode == "pedestrian") {
//         // L.Marker.prototype.options.icon = bikIcon;
//         layer.options.icon = pedIconS;
//         layer.bindPopup(content);
//     } else {
//         // L.Marker.prototype.options.icon = pedIcon;
//         layer.options.icon = bikIcon;
//         layer.bindPopup(content);
//     }
//   }
// };
  // // if (feature.properties.date.slice(0,3) == year.value || year.value == "All") {
  // if (feature.properties.date.slice(0,3) == year.value) {
  //   if (feature.properties.mode == "bicycle") {
  //       L.Marker.prototype.options.icon = bikIconS
  //   } else {
  //       L.Marker.prototype.options.icon = pedIconS
  //   }
  // }
  // // if (feature.properties.city == town.value || town.value == "All") {
  // if (feature.properties.city == town.value) {
  //   if (feature.properties.mode == "bicycle") {
  //       L.Marker.prototype.options.icon = bikIconS
  //   } else {
  //       L.Marker.prototype.options.icon = pedIconS
  //   }
  // }
  // };

// add fatal data points and with popups
 L.geoJson(fatalData, {
   onEachFeature: onEachFeature
 }).addTo(map);
