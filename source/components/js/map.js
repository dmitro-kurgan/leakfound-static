GoogleMapsLoader.KEY = 'AIzaSyDP13T048ji9u8_di9Gdpmh6bkBhPoC3bs';
GoogleMapsLoader.LANGUAGE = 'ua';

if(document.getElementById('map')) {
  GoogleMapsLoader.load(function(google) {
  	var myLatLng = {lat: 34.216503, lng: -119.067377};
    var map = new google.maps.Map(document.getElementById('map'), {
      	center: myLatLng,
	    scrollwheel:false,
	    zoom: 17,
        styles: [
        {
          "stylers": [
            { "saturation": -100 }
          ] 
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            { "visibility": "off" }
          ]
        }
      ]
    });
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      animation: google.maps.Animation.DROP,
      title: 'DISASTER SWAT RESTORATION',
      icon: {
        url: require("../images/marker.png"),
        scaledSize: new google.maps.Size(40, 40)
      }
    });
  });
};

if(document.getElementById('map2')) {
  GoogleMapsLoader.load(function(google) {
      var myLatLng = {lat: 34.140589, lng: -118.197326};
      var myLatLng2 = {lat: 34.216349, lng: -119.067126};
      var myLatLng3 = {lat: 32.789623, lng: -117.145341};
    var map = new google.maps.Map(document.getElementById('map2'), {
      center: myLatLng3,
      scrollwheel:false,
      zoom: 8,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: !1,
      styles: [
        {
          "stylers": [
            { "saturation": -100 }
          ] 
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            { "visibility": "off" }
          ]
        }
      ]
    });
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      animation: google.maps.Animation.DROP,
      title: 'Los Angeles',
      icon: {
        url: require("../images/marker.png"),
        scaledSize: new google.maps.Size(40, 40)
      }
    });
    var marker2 = new google.maps.Marker({
      map: map,
      position: myLatLng2,
      animation: google.maps.Animation.DROP,
      title: 'Ventura',
      icon: {
        url: require("../images/marker.png"),
        scaledSize: new google.maps.Size(40, 40)
      }
    });
    var marker3 = new google.maps.Marker({
      map: map,
      position: myLatLng3,
      title: 'Orange',
      icon: {
        url: require("../images/marker.png"),
        scaledSize: new google.maps.Size(40, 40)
      }
    });
  });
};