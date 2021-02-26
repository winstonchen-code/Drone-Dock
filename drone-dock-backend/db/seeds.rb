# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
FootageLog.destroy_all
Video.destroy_all


User.create(username: "winston", password: "123", bio: "student", image: "")
User.create(username: "tommy", password: "123", bio: "student", image: "")
User.create(username: "kelly", password: "123", bio: "student", image: "")

FootageLog.create(date: Date.new(2021, 1, 21), location: "Virginia", user_id: User.all.sample.id)
FootageLog.create(date: Date.new(2022, 2, 23), location: "Texas", user_id: User.all.sample.id)
FootageLog.create(date: Date.new(2023, 3, 23), location: "California", user_id: User.all.sample.id)

Video.create(url: "hi", description: "Fun", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "hi1", description: "Fun1", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "hi2", description: "Fun2", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "hi3", description: "Fun3", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "hi4", description: "Fun4", footage_log_id: FootageLog.all.sample.id)
