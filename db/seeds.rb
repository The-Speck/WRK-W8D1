# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lat = [37.706, 37.783]
long = [-112.5, -112.38]

description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

100.times {
  random_lat = lat.min + rand()*(lat.max - lat.min)
  random_long = long.min + rand()*(long.max - long.min)
  randomBench = {lat: random_lat, lng: random_long, description: description}
  Bench.create!(randomBench)
}
