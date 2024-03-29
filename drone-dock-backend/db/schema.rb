# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_09_030309) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "footage_logs", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "location"
    t.date "date"
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "bio"
    t.string "email"
    t.string "password_digest"
  end

  create_table "videos", force: :cascade do |t|
    t.string "title"
    t.string "url"
    t.string "description"
    t.integer "footage_log_id"
    t.boolean "active"
  end

end
