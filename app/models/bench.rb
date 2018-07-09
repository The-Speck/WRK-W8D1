# == Schema Information
#
# Table name: benches
#
#  id          :bigint(8)        not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  rating      :float
#  seats       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    Bench.where ( "lat > #{bounds['southWest']['lat'].to_i} AND lng > #{bounds['southWest']['lng'].to_i} AND lat > #{bounds['northEast']['lat'].to_i} AND lng > #{bounds['northEast']['lng'].to_i}" )

    #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  end
end
