class AddStopOverToDestination < ActiveRecord::Migration[7.0]
  def change
    add_reference :destinations, :stop_over, null: false, foreign_key: true
  end
end
