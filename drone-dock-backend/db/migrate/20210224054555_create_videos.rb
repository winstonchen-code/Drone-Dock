class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :url
      t.string :description
      t.integer :footage_log_id

      t.timestamps
    end
  end
end
