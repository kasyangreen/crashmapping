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
    // 9 permutations of mode, year and town selections
  if (mode.value == "All" || year.value == "All" || town.value == "All") {    // no selection, but Redraw pushed
    var script = document.createElement('script');
    script.src = "js/leaflet.popup.js";
    document.head.appendChild(script);
  };
  if (mode.value !== "All" || year.value == "All" || town.value == "All") {    // mode selection; no other selection
      // mode selection; no other selections
      if (mode.value == "Bicycle") {
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
          }
        }
      };
  if (mode.value == "All" || year.value !== "All" || town.value == "All") {  // year selection
     if (year.value == feature.properties.year) {
       if (feature.properties.mode == "bicycle") {
           layer.options.icon = bikIconS;
           layer.bindPopup(content);
       } else {
           layer.options.icon = pedIconS;
           layer.bindPopup(content);
       }};
    if (year.value !== feature.properties.year) {
         if (feature.properties.mode == "bicycle") {
             layer.options.icon = bikIcon;
             layer.bindPopup(content);
         } else {
             layer.options.icon = pedIcon;
             layer.bindPopup(content);
         }};
  };
  if (mode.value == "All" || year.value == "All" || town.value !== "All") {   // town selected
    if (town.value == feature.properties.town) {
      if (feature.properties.mode == "bicycle") {
          layer.options.icon = bikIconS;
          layer.bindPopup(content);
      } else {
          layer.options.icon = pedIconS;
          layer.bindPopup(content);
      }};
    if (town.value !== feature.properties.town) {
      if (feature.properties.mode == "bicycle") {
            layer.options.icon = bikIcon;
            layer.bindPopup(content);
      } else {
            layer.options.icon = pedIcon;
            layer.bindPopup(content);
        }
      }
    };
  if (mode.value !== "All" || year.value !== "All" || town.value == "All") { //mode & year selected
    // selected year
    if (year.value == feature.properties.year) {
      if (mode.value == "Bicycle") {
          layer.options.icon = bikIconS;
          layer.bindPopup(content);
      } else {
          layer.options.icon = pedIcon;
          layer.bindPopup(content);
      };
    if (mode.value == "Pedestrian") {
          layer.options.icon = pedIconS;
          layer.bindPopup(content);
      } else {
          layer.options.icon = bikIcon;
          layer.bindPopup(content);
      };
    };
    // not selected year
    if (year.value !== feature.properties.year) {
      if (feature.properties.mode == "bicycle") {
          layer.options.icon = bikIcon;
          layer.bindPopup(content);
      } else {
          layer.options.icon = pedIcon;
          layer.bindPopup(content);
      }
    }
  };
  if (mode.value == "All" || year.value !== "All" || town.value !== "All") {  // year & town selected
    // selected year
    if (year.value == feature.properties.year) {
      if (town.value == feature.properties.city) {      // selected year & town
        if (mode.value == "Bicycle") {
            layer.options.icon = bikIconS;
            layer.bindPopup(content)
        } else {
            layer.options.icon = pedIconS;
            layer.bindPopup(content);
        };
      };
      if (town.value !== feature.properties.city) {     // selected year not selected town
          if (mode.value == "Bicycle") {
              layer.options.icon = bikIcon;
              layer.bindPopup(content);
          } else {
              layer.options.icon = pedIcon;
              layer.bindPopup(content);
          }
      }
    };
    if (year.value !== feature.properties.year) {        // not selected year
      if (feature.properties.mode == "bicycle") {
        layer.options.icon = bikIcon;
        layer.bindPopup(content);
      } else {
        layer.options.icon = pedIcon;
        layer.bindPopup(content);
      }
    };
  };
  if (mode.value !== "All" || year.value == "All" || town.value !== "All") { // mode & town selected
    // selected town
    if (town.value == feature.properties.city) {        // selected town
      if (year.value == feature.properties.year) {      // selected year & town
        if (mode.value == "Bicycle") {
            layer.options.icon = bikIconS;
            layer.bindPopup(content)
        } else {
            layer.options.icon = pedIconS;
            layer.bindPopup(content);
        };
      };
      if (year.value !== feature.properties.year) {     // selected town not selected year
          if (mode.value == "Bicycle") {
              layer.options.icon = bikIcon;
              layer.bindPopup(content);
          } else {
              layer.options.icon = pedIcon;
              layer.bindPopup(content);
          }
      }
    };
    if (town.value !== feature.properties.city) {        // not selected town
      if (feature.properties.mode == "bicycle") {
        layer.options.icon = bikIcon;
        layer.bindPopup(content);
      } else {
        layer.options.icon = pedIcon;
        layer.bindPopup(content);
      }
    }
  };
if (mode.value !== "All" || year.value !== "All" || town.value !== "All") { // all three selected
  // selected town
  if (town.value == feature.properties.city) {        // selected town
    if (year.value == feature.properties.year) {      // selected year & town
      if (mode.value == "Bicycle") {                  // bike selected
          layer.options.icon = bikIconS;
          layer.bindPopup(content)
      } else {
          layer.options.icon = pedIcon;
          layer.bindPopup(content);
      };
      if (mode.value == "pedestrian") {                // ped selected
          layer.options.icon = bikIcon;
          layer.bindPopup(content)
      } else {
          layer.options.icon = pedIconS;
          layer.bindPopup(content);
      };
    }
  };
  if (town.value !== feature.properties.city) {        // not selected town
    if (feature.properties.mode == "bicycle") {
      layer.options.icon = bikIcon;
      layer.bindPopup(content);
    } else {
      layer.options.icon = pedIcon;
      layer.bindPopup(content);
    }
  };
};

// add fatal data points and with popups
 L.geoJson(fatalData, {
   onEachFeature: onEachFeature
 }).addTo(map);