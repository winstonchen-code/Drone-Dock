class CreateFootageLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :footage_logs do |t|
      t.string :name
      t.string :image
      t.string :location
      t.date :date
      t.integer :user_id
    end
  end
end
