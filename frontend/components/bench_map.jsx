import React from 'react';
import MarkerManager from '../util/marker_manager';

class BenchMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.listenForMove();
    // this.props.fetchBenches(bounds);
  }

  listenForMove() {
    google.maps.event.addListener(this.map, 'idle', () => {
      let bounds = this.map.getBounds();

      bounds = {
        northEast: { lat: bounds.getNorthEast().lat(), lng: bounds.getNorthEast().lng() },
        southWest: { lat: bounds.getSouthWest().lat(), lng: bounds.getSouthWest().lng() }
      };

      this.props.updateBounds(bounds);
    });
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default BenchMap;
