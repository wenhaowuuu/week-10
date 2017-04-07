// Leaflet map setup
var map = L.map('map', {
  center: [39.923004, -75.183477],
  zoom: 13
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

// To add your Carto visualization, change cartoUserName and cartoVizId to your username and
// project ID. These values can be found in the URL of your map on Carto:
// - https://[cartoUserName].carto.com/[cartoVizId]

// Unfortunately, only some visualizations styles are available in this method:
//
// - None
// - Animated
// - Pixel
//
// This is a bummer. But don't worry, we'll learn about how to do more powerful visualizations
// with Carto next week when we learn about SQL

// To add visualizations created with the Analysis feature, you will need to export the data to a
// GeoJSON. From there, you can either import the GeoJSON to Carto or use Leaflet's L.geoJson.

var cartoUserName = 'wenhaowuuu';
var cartoVizId1 = 'f08cfabc-1ba8-11e7-a4f7-0e3a376473ab';
var cartoVizId2 = '71b41866-1bac-11e7-83a3-0ecd1babdde5';

var layerUrl1 = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId1+'/viz.json';
console.log('historic site added');

var layerUrl2 = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId2+'/viz.json';
console.log('crime spots added');

cartodb.createLayer(map, layerUrl1)
  .on('done', function(layer1) {
    layer1.addTo(map);
    console.log('added');
  }).on('error', function(err) {
    console.log(err);
  });

cartodb.createLayer(map, layerUrl2)
  .on('done', function(layer2) {
    layer2.addTo(map);
    console.log('added');
  }).on('error', function(err) {
    console.log(err);
  });

  L.geoJSON().addTo(map);
//
// console.log(philadelphia_crime_points_geojson.geojson);
// L.geoJSON(philadelphia_crime_points_geojson).addTo(map);
