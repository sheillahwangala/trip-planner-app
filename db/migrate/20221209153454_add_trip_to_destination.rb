class AddTripToDestination < ActiveRecord::Migration[7.0]
  def change
    add_reference :destinations, :trip, null: false, foreign_key: true
  end
end
