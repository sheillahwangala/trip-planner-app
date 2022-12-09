class Destination < ApplicationRecord
    has_many :stopovers
    has_many :trips, through: :stopovers
end
