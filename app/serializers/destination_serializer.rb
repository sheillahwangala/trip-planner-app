class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :notes, :photos, :trip_id

  has_many :trips
  # has_many :stop_overs
end
