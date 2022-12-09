class AddDestinationToStopOver < ActiveRecord::Migration[7.0]
  def change
    add_reference :stop_overs, :destination, null: false, foreign_key: true
  end
end
