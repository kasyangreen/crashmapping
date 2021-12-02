
//https://www.liedman.net/leaflet-routing-machine/tutorials/interaction/
L.Routing.control({
  waypoints: [
    L.latlng(57.74, 11.94),
    L.latlng(57.6793, 11.949)
  ],
  routeWhileDragging: true
  router: L.Routing.mapbox('pk.eyJ1IjoiemFpbmFiZmFyaWQiLCJhIjoiY2t2MmhjdTVrODZjejJ6bW44M2sxb3huciJ9.c9VkMw-9GGC_82nFGsDLDw')
}).addTo(map);


//make popup when map is clicked

function createButton(label, container) {
    var btn = L.DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
}

map.on('click', function(e) {
  var container = L.DomUtil.create('div'),
      startBtn = createButton('Start from this location', container),
      destBtn = createButton('Go to this location', container);

      L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(map);
});


//replace the first waypoint

      L.DomEvent.on(startBtn, 'click', function() {
        control.spliceWaypoints(0, 1, e.latlng);
        map1.closePopup();
      });

//replacing last waypoints
      L.DomEvent.on(destBtn, 'click', function() {
        control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
        map1.closePopup();
      });


//to reverse the Route
var ReversablePlan = L.Routing.Plan.extent({
  createGeocoders: function() {
    var container = L.Routing.Plan.prototype.createGeocoders.call(this),
        reverseButton = createButton('↑↓'), container);
    return container;

  }
}

//Having added the new button, we simply need to attach a listener to it, and make it reverse the route. We add this code inside the createGeocders method, before returning the container:
//class=”<pre><code language-javascript”> L.DomEvent.on(reverseButton, ‘click’, function() { var waypoints = this.getWaypoints(); this.setWaypoints(waypoints.reverse()); }, this); </code></pre>

var plan = new ReversablePlan([
    L.latlng(57.74, 11.94),
    L.latlng(57.692, 11.949)
], {
  geocoder: L.Control.Geocoder.nominatim(),
  routeWhileDragging: true
}),
control = L.Routing.control({
  routeWhileDragging: true,
  plan: plan
}).addTo(map1);
