class CreateDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :destinations do |t|
      t.string :name
      t.string :location
      t.string :notes
      t.string :photos

      t.timestamps
    end
  end
end
