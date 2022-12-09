class Trip < ApplicationRecord
    has_many :stopovers
    has_many :destinations, through: :stopovers
end
