// change icons based on dropdown menu selection
// ped icon - unselected
var pedIconS = L.icon({
iconUrl: "images/ped_yel.png",
iconSize: [15,15],
iconAnchor: [7.5, 7.5]
});
// bike icon - unselected
var bikIconS = L.icon({
iconUrl: "images/bike_yel.png",
iconSize: [20,20],
iconAnchor: [10, 10]
});
// ped icon - selected
var pedIcon = L.icon({
iconUrl: "images/ped_gry.png",
iconSize: [15,15],
iconAnchor: [7.5, 7.5]
});
// bike icon - selected
var bikIcon = L.icon({
iconUrl: "images/bike_gry.png",
iconSize: [20,20],
iconAnchor: [10, 10]
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
    // console.log(mode.value);
    // console.log(year.value);
    // console.log(town.value);

  if (mode.value == "All" && year.value == "All" && town.value == "All") {    // no selection, but Redraw pushed
    // var script = document.createElement('script');
    // script.src = "js/leaflet.popup.js";
    // document.head.appendChild(script);
    console.log("all three")
    if (feature.properties.mode == "bicycle") {
        layer.options.icon = bikIconS;
        layer.bindPopup(content);
    } else {
        layer.options.icon = pedIconS;
        layer.bindPopup(content);
    }
  };
  if (mode.value !== "All" && year.value == "All" && town.value == "All") {    // mode selection; no other selection
      // mode selection; no other selections
      console.log("just mode")
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
  if (mode.value == "All" && year.value !== "All" && town.value == "All") {  // year selection
    console.log("just year")
    console.log(year.value)
    console.log(feature.properties.date.slice(0,4))
     if (year.value == feature.properties.date.slice(0,4)) {
       if (feature.properties.mode == "bicycle") {
           layer.options.icon = bikIconS;
           layer.bindPopup(content);
       } else {
           layer.options.icon = pedIconS;
           layer.bindPopup(content);
       }};
    if (year.value !== feature.properties.date.slice(0,4)) {
         if (feature.properties.mode == "bicycle") {
             layer.options.icon = bikIcon;
             layer.bindPopup(content);
         } else {
             layer.options.icon = pedIcon;
             layer.bindPopup(content);
         }};
  };
  if (mode.value == "All" && year.value == "All" && town.value !== "All") {   // town selected
    if (town.value == feature.properties.city) {
      if (feature.properties.mode == "bicycle") {
          layer.options.icon = bikIconS;
          layer.bindPopup(content);
      } else {
          layer.options.icon = pedIconS;
          layer.bindPopup(content);
      }};
    if (town.value !== feature.properties.city) {
      if (feature.properties.mode == "bicycle") {
            layer.options.icon = bikIcon;
            layer.bindPopup(content);
      } else {
            layer.options.icon = pedIcon;
            layer.bindPopup(content);
        }
      }
  };
  if (mode.value !== "All" && year.value !== "All" && town.value == "All") { //mode & year selected
    console.log("mode and year")
    if (year.value == feature.properties.date.slice(0,4)) {           // selected year
      if (mode.value == "Bicycle") {                                  // selected bike & year
        if (feature.properties.mode == "bicycle") {                   // feature mode = bike
            layer.options.icon = bikIconS;
            layer.bindPopup(content)
        } else {
            layer.options.icon = pedIcon;
            layer.bindPopup(content);
        };
      } else {                                                        // feature mode != bike
        if (feature.properties.mode == "bicycle") {
            layer.options.icon = bikIcon;
            layer.bindPopup(content)
        } else {
            layer.options.icon = pedIconS;
            layer.bindPopup(content);
        };
      };
    };                                                                 // end selected year
    if (year.value !== feature.properties.date.slice(0,4)) {           // not selected year
      if (feature.properties.mode == "bicycle") {
          layer.options.icon = bikIcon;
          layer.bindPopup(content);
      } else {
          layer.options.icon = pedIcon;
          layer.bindPopup(content);
      };
    };                                                                // end not selected year
  };                                                                  // end mode & year selected
  if (mode.value == "All" && year.value !== "All" && town.value !== "All") {  // year & town selected
    // selected year
    console.log("year and town selected")
    console.log(town.value)
    console.log(feature.properties.city)
    if (year.value == feature.properties.date.slice(0,4)) {       // selected year
      if (town.value == feature.properties.city) {                // selected year & town
        if (feature.properties.mode == "bicycle") {               // feature mode = bike
            layer.options.icon = bikIconS;
            layer.bindPopup(content)
        } else {
            layer.options.icon = pedIconS;
            layer.bindPopup(content);
        };
        // if (feature.properties.mode == "pedestrian") {            // feature mode = ped
        //     layer.options.icon = pedIconS;
        //     layer.bindPopup(content)
        // } else {
        //     layer.options.icon = bikIcon;
        //     layer.bindPopup(content);
        // };
      };                                                           // end selected town - continue selected year
      if (town.value !== feature.properties.city) {                // selected year not selected town
          if (feature.properties.mode == "Bicycle") {
              layer.options.icon = bikIcon;
              layer.bindPopup(content);
          } else {
              layer.options.icon = pedIcon;
              layer.bindPopup(content);
          };
      };
    };                                                               // end selected year & town selected
    if (year.value !== feature.properties.date.slice(0,4)) {        // not selected year
      if (feature.properties.mode == "bicycle") {
        layer.options.icon = bikIcon;
        layer.bindPopup(content);
      } else {
        layer.options.icon = pedIcon;
        layer.bindPopup(content);
      };
    };                                                              // end not selected year
  };  // end
  if (mode.value !== "All" && year.value == "All" && town.value !== "All") { // mode & town selected
    // selected town
    if (town.value == feature.properties.city) {        // selected town
      if (mode.value == "Bicycle") {                    // selected bike & town
        if (feature.properties.mode == "bicycle") {     // feature mode = bike
            layer.options.icon = bikIconS;
            layer.bindPopup(content)
        } else {
            layer.options.icon = pedIcon;
            layer.bindPopup(content);
        };
      } else {                                          // feature mode != bike
        if (feature.properties.mode == "bicycle") {
            layer.options.icon = bikIcon;
            layer.bindPopup(content)
        } else {
            layer.options.icon = pedIconS;
            layer.bindPopup(content);
        };
      };                                                // end mode = ped for selected town
    };                                                  // end selected town
    if (town.value !== feature.properties.city) {       // not selected town
      if (feature.properties.mode == "bicycle") {
        layer.options.icon = bikIcon;
        layer.bindPopup(content);
      } else {
        layer.options.icon = pedIcon;
        layer.bindPopup(content);
      };
    };
  };                                                    // end mode & town selected
if (mode.value !== "All" && year.value !== "All" && town.value !== "All") { // all three selected
  // selected town
  if (town.value == feature.properties.city) {        // selected town
    if (year.value == feature.properties.date.slice(0,4)) {      // selected year & town
      if (mode.value == "Bicycle") {                  // selected year & town & bike selected
        if (feature.properties.mode == "bicycle") {   // selected year, town & bike - check feature mode
          layer.options.icon = bikIconS;
          layer.bindPopup(content)
        } else {
          layer.options.icon = pedIcon;
          layer.bindPopup(content);
        };
      } else {                                         // end selected bicycle - selected year & town continues
        if (feature.properties.mode == "pedestrian") {
          layer.options.icon = pedIconS;
          layer.bindPopup(content)
        } else {
          layer.options.icon = bikIcon;
          layer.bindPopup(content);
        };
      };                                              // end selected ped - selected year & town continue
    };                                                //end selected year - town continues
    if (year.value !== feature.properties.date.slice(0,4)) { // selected town & not selected Year
      if (feature.properties.mode == "bicycle") {
        layer.options.icon = bikIcon;
        layer.bindPopup(content);
      } else {
        layer.options.icon = pedIcon;
        layer.bindPopup(content);
      }
    };                                            //end selected town & not selected Year
  };                                              // end selected town
  if (town.value !== feature.properties.city) {        // not selected town
    if (feature.properties.mode == "bicycle") {
      layer.options.icon = bikIcon;
      layer.bindPopup(content);
    } else {
      layer.options.icon = pedIcon;
      layer.bindPopup(content);
    }
  };                                               // end not selected town
};                                                 // end all three selected
};                                                 //end onEachFeature()

// add fatal data points and with popups
 L.geoJson(fatalData, {
   onEachFeature: onEachFeature
 }).addTo(map);
