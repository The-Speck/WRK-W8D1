import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

class Search extends React.Component {

  render() {
    const { benches, updateBounds } = this.props;

    return (
      <div>
        <BenchMap benches={benches} updateBounds={updateBounds} fetchBenches={fetchBenches}/>
        <BenchIndex benches={benches} />
      </div>
    );
  }
}

export default Search;
