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
    Bench.all.select do |bench|

    end
  end
end
