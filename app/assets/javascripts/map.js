
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);
        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var id= $('.map').attr('id');
            console.log("the id is " ,id);
            switch (id) {
                case 'mapsan-francisco':
                    var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                        zoom: 12,
                // The latitude and longitude to center the map (always required)
                        center: new google.maps.LatLng(37.78, -122.44), // San Francisco

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                        styles: [{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"poi.place_of_worship","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#83f03a"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#579d28"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#ed631d"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#1ab61c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#1ab61c"},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"hue":"#ff0000"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]}]
                    };
                    var mapElement = document.getElementById('mapsan-francisco');
                    // Create the Google Map using our element and options defined above
                    var map = new google.maps.Map(mapElement, mapOptions);
                break;

                case 'mapnew-york':
                    var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                        zoom: 13,
                // The latitude and longitude to center the map (always required)
                        center: new google.maps.LatLng(40.7127, -74.0059), // New York
                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                        styles: [{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"poi.place_of_worship","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#83f03a"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#579d28"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#ed631d"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#1ab61c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#1ab61c"},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"hue":"#ff0000"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]}]
                    };
                    var mapElement = document.getElementById('mapnew-york');
                    // Create the Google Map using our element and options defined above
                     var map = new google.maps.Map(mapElement, mapOptions);
                break;
                case 'maplondon':
                    var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                        zoom: 12,
                // The latitude and longitude to center the map (always required)
                        center: new google.maps.LatLng(51.507409, -0.127489), // London
                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                        styles: [{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"poi.place_of_worship","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#83f03a"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#579d28"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#ed631d"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#1ab61c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#1ab61c"},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"hue":"#ff0000"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]}]
                    };
                    var mapElement = document.getElementById('maplondon');
                    // Create the Google Map using our element and options defined above
                     var map = new google.maps.Map(mapElement, mapOptions);
                break;
                case 'mapgibraltar':
                    var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                        zoom: 12,
                // The latitude and longitude to center the map (always required)
                        center: new google.maps.LatLng(36.134477, -5.350000), // Gibraltar
                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                        styles: [{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"poi.place_of_worship","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#83f03a"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#579d28"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#ed631d"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#1ab61c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#1ab61c"},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"hue":"#ff0000"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]}]
                    };
                    var mapElement = document.getElementById('mapgibraltar');
                    // Create the Google Map using our element and options defined above
                     var map = new google.maps.Map(mapElement, mapOptions);
                break;
                default:
                    var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 2,
                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(37.78, -122.44), // San Francisco
                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"poi.place_of_worship","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#83f03a"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#579d28"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#ed631d"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#1ab61c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#1ab61c"},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"hue":"#ff0000"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]}]
                     };
                     // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');
            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);
            // Let's add a marker for San Francisco:
            var marker1 = new google.maps.Marker({
                position: new google.maps.LatLng(37.78, -122.44),
                map: map,
                title: 'Snazzy!'
            });

            // Adds link to maker
            google.maps.event.addListener(marker1, 'click', function() { 
              window.location = "/cities/san-francisco";
            });

            // Let's also add a marker for New York:
            var marker2 = new google.maps.Marker({
                position: new google.maps.LatLng(40.7127, -74.0059),
                map: map,
                title: 'Snazzy!'
            });

            // Adds link to maker
            google.maps.event.addListener(marker2, 'click', function() { 
              window.location = "/cities/new-york";
            });

            // Let's also add a marker for Gibraltar:
            var marker3 = new google.maps.Marker({
                position: new google.maps.LatLng(36.134477, -5.350000),
                map: map,
                title: 'Snazzy!'
            });

            // Adds link to maker
            google.maps.event.addListener(marker3, 'click', function() { 
              window.location = "cities/london";
            });

            // Let's also add a marker for London:
            var marker4 = new google.maps.Marker({
                position: new google.maps.LatLng(51.507409, -0.127489),
                map: map,
                title: 'Snazzy!'
            });

            // Adds link to maker
            google.maps.event.addListener(marker4, 'click', function() { 
              window.location = "/cities/gibraltar";
            });
        }   
        }