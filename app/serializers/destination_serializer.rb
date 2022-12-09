class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :notes, :photos

  has_many :trips
end
