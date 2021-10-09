// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map =L.map('mapid').setView([29.5311, -98.47053], 5);

// Coordinates for each point to be used in the line.
let line = [
	[33.9416, -118.4085],
	[20.9909, -101.4868],
	[29.5311, -98.47053],
	[38.8987, -77.59372]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
	color: "#9ac1e8",
	dashArray: "7 7",
	weight: "3"

  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {//Dark map
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);