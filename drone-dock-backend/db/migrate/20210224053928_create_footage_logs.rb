class CreateFootageLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :footage_logs do |t|
      t.date :date
      t.string :location
      t.integer :user_id

      t.timestamps
    end
  end
end
