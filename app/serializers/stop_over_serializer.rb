class StopOverSerializer < ActiveModel::Serializer
  attributes :id, :name, :activity, :destination_id

  belongs_to :destination
end
