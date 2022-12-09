class StopOverSerializer < ActiveModel::Serializer
  attributes :id, :name, :activity

  belongs_to :destination
end
