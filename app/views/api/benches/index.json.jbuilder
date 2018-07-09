@benches.each do |bench|
  json.set! bench.id do
    json.extract! bench, :id, :description, :lat, :lng, :rating, :seats 
  end
end
