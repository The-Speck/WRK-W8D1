import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  // componentDidMount() {
  //   this.props.fetchBenches();
  // }

  render() {

    const benches = this.props.benches.map((bench) => {
      return <BenchIndexItem bench={bench} key={bench.id}/>;
    });

    return (
      <ul>
        {benches}
      </ul>
    );
  }
}

export default BenchIndex;
