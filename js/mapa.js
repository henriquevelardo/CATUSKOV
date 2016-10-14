/*function initMap() {
  var styles = [
  {
    "elementType": "geometry",
    "stylers": [
      { "saturation": 100 },
      { "hue": "#b300ff" },
      { "gamma": 0.51 }
    ]
  }
];
  var map = new google.maps.Map(document.getElementById('map'),
  {
    zoom: 18,
    center: {lat: -23.5469081, lng: -46.6490942},
    mapTypeControl: true,
    zoomControl: true,
    scrollwheel:false,
    signInControl:false,
    scaleControl: true,
    mapTypeControlOptions: {
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    mapTypeIds: [
    google.maps.MapTypeId.ROADMAP,
    google.maps.MapTypeId.TERRAIN
      ]
    }
    
  });

  setCatuaba(map);
  setAskov(map);
  setCatuSkov(map);
  var styledMap = new google.maps.StyledMapType( styles, {name: "Styled Map"} );
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
  
}
/* APENAS CATUABA */

/*var bares = [
  ['ENTRE AMIGOS', -23.546572, -46.648925, 4],
  ['SUCESSOS', -23.546994, -46.649134, 5],
  ['DESKOLADO', -23.547011, -46.648929, 3],
  ['MORSAS', -23.547270, -46.648835, 2],
  ['MAC BAR', -23.547255, -46.648930, 1]
];

function setCatuaba(map) {
  var imageCatuaba = {
    url: 'images/catuaba1.png',
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
  };
  
   var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  }; 
  for (var i = 0; i < bares.length; i++) {
    var bar = bares[i];
    var marker = new google.maps.Marker({
      position: {lat: bar[1], lng: bar[2]},
      map: map,
      icon: imageCatuaba,
      shape: shape,
      title: bar[0],
      zIndex: bar[3]
    });
  }
}
/* APENAS ASKOV *
var baresAskov = [
  ['BAR BELLA', -23.547438, -46.649373, 4],
  ['', -23.546869, -46.649141, 5],
  ['', -23.546951, -46.648824, 3],
  ['MORSAS', -23.547248, -46.648860, 2],
  ['', -23.546705, -46.648896, 1]
];

function setAskov(map) {
  var imageAskov = {
    url: 'images/askovM.png',
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
  };
  
   var shapeA = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  }; 
  for (var i = 0; i < baresAskov.length; i++) {
    var barA = baresAskov[i];
    var markerA = new google.maps.Marker({
      position: {lat: barA[1], lng: barA[2]},
      map: map,
      icon: imageAskov,
      shapeA: shapeA,
      title: barA[0],
      zIndex: barA[3]
    });
  }
}
/* BARES CATUSKOV */
/*var baresCatuSkov = [
  ['MAC FILL', -23.546414, -46.651015, 4],
  ['INDIO', -23.547750, -46.649416, 5],
  ['', 66.546951, -46.648824, 3],
  ['', 66.547248, -46.648860, 2],
  ['', 66.546705, -46.648896, 1] 
];
function setCatuSkov(map) {
  var imageCatuSkov = {
    url: 'images/catuskov.1.png',
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
  };
  
   var shapeCS = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  }; 
  for (var i = 0; i < baresCatuSkov.length; i++) {
    var barCS = baresCatuSkov[i];
    var markerCS = new google.maps.Marker({
      position: {lat: barCS[1], lng: barCS[2]},
      map: map,
      icon: imageCatuSkov,
      shapeA: shapeCS,
      title: barCS[0],
      zIndex: barCS[3]
    });
  }
}