class TripSerializer < ActiveModel::Serializer
  attributes :id, :title, :start_date, :end_date
end
