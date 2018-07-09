export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    benches.map((bench) => {
      if (!this.markers[bench.id]){
        this.createMarkerFromBench(bench);
      }
    });
  }

  createMarkerFromBench(bench) {
    const latLong = {lat: bench.lat, lng: bench.lng-10};
    
    const marker = new google.maps.Marker({
      position: latLong,
      title: bench.description
    });

    this.markers[bench.id] = marker;
    marker.setMap(this.map);
  }
}
