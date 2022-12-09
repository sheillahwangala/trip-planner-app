class TripSerializer < ActiveModel::Serializer
  attributes :id, :title, :start_date, :end_date

  has_many :destinations
end
