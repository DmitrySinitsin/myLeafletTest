var map = L.map('map', {
}).setView([55.7797, 38.6707], 17);

// https://a.tiles.mapbox.com/v4/mapbox.streets/2/1/1.png?access_token=pk.eyJ1IjoibGllZG1hbiIsImEiOiJjaXZ0NzEzMm0wMDNrMnlxZGtwZDhlb3V0In0.M3hMRRUB0CoqFEneKWVHKA


var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

var Esri_OceanBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
  maxZoom: 13
});

var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="copyright">Openstreetmap</a>'
}).addTo(map);





var baseMaps = {
  Mapnik: OpenStreetMap_Mapnik,
  OSM: osmLayer,
  ESRI: Esri_WorldTopoMap,
  EO: Esri_OceanBasemap,
};

var markerPosad = L.marker([55.7797, 38.6707], {
  //icon: greenIcon,
  draggable: false,
})
.bindPopup('Герцена, 18, 8 <br> 55.7797, 38.6707')
//.addTo(map);

var markerGarage = L.marker([58.552592114524664, 49.69043127457112], {
  // icon: greenIcon
  draggable: false,
})
.bindPopup('Гараж Корчемкино <br> 58.552592114524664, 49.69043127457112')
//.addTo(map);

//
var marker32999 = L.marker([63.72094954895118, 66.67198955144882], {
  // icon: greenIcon
  draggable: false,
})
.bindPopup('Белоярский 32999 <br> 63.72094954895118, 66.67198955144882')
//.addTo(map);

var groupRealty = L.layerGroup([markerPosad, markerGarage, marker32999])//группировка маркеров с помощью layerGroup
.addTo(map);


//менюшка справа вверху с радиокнопками выбора карт
L.control.layers(baseMaps, { 
  'Мои объекты': groupRealty,
}).addTo(map);


//https://leaflet-extras.github.io/leaflet-providers/preview/
//44:32
