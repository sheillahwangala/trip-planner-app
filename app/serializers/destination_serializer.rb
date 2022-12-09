class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :notes, :photos
end
