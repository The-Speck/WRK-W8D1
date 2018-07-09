export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    this.clearAllMarkers();
    benches.map((bench) => {
      this.createMarkerFromBench(bench);
    });
  }

  clearAllMarkers() {
    debugger
    for (const marker in this.markers) {
      this.markers[marker].marker.setMap(null);
    }
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
