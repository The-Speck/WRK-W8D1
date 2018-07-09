// const filter = {
//      northEast: {lat: 37.80971, lng: -122.39208},
//      southWest: {lat: 37.74187, lng: -122.47791}
// };

export const fetchBenches = (filters) => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: '/api/benches',
    data: { bounds: filters }
  });
};
