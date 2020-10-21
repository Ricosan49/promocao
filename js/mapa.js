var map;
 
function initialize() {
   var coordenadas = {lat: -23.538456, lng: -46.804242};

			var mapa = new google.maps.Map(document.getElementById('mapa'), {
				zoom: 15,
				center: coordenadas 
			});

			var marker = new google.maps.Marker({
				position: coordenadas,
				map: mapa,
				title: 'Meu marcador'
			});
}
 
initialize();