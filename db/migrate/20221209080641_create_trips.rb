class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :title
      t.string :start_date
      t.string :end_date

      t.timestamps
    end
  end
end
