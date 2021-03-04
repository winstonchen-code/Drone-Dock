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


User.create(name: "Winston", bio: "student", image: "", email: "winston@winston.com", password: "123")
User.create(name: "Tommy", bio: "student", image: "", email: "tommy@tommy.com", password: "123")
User.create(name: "Kelly", bio: "student", image: "", email: "kelly@kelly.com", password: "123")

FootageLog.create(name: "Burke Lake", image: "https://static.rootsrated.com/image/upload/s--s8KOEgTn--/t_rr_large_natural/rtuo8hxap892w3axda7z.jpg", location: "Virginia", date: Date.new(2021, 1, 21), user_id: User.first.id)
FootageLog.create(name: "Second Try", image: "https://static.rootsrated.com/image/upload/s--s8KOEgTn--/t_rr_large_natural/rtuo8hxap892w3axda7z.jpg", location: "DC", date: Date.new(2022, 2, 22), user_id: User.first.id)
FootageLog.create(name: "Third Try", image: "https://static.rootsrated.com/image/upload/s--s8KOEgTn--/t_rr_large_natural/rtuo8hxap892w3axda7z.jpg", location: "Texas", date: Date.new(2023, 3, 23), user_id: User.first.id)
FootageLog.create(name: "Fourth Try", image: "https://static.rootsrated.com/image/upload/s--s8KOEgTn--/t_rr_large_natural/rtuo8hxap892w3axda7z.jpg", location: "California", date: Date.new(2024, 4, 24), user_id: User.first.id)
FootageLog.create(name: "Fourth Try", image: "https://static.rootsrated.com/image/upload/s--s8KOEgTn--/t_rr_large_natural/rtuo8hxap892w3axda7z.jpg", location: "California", date: Date.new(2024, 4, 24), user_id: User.first.id)
FootageLog.create(name: "Fourth Try", image: "https://static.rootsrated.com/image/upload/s--s8KOEgTn--/t_rr_large_natural/rtuo8hxap892w3axda7z.jpg", location: "California", date: Date.new(2024, 4, 24), user_id: User.first.id)
FootageLog.create(name: "Fourth Try", image: "https://static.rootsrated.com/image/upload/s--s8KOEgTn--/t_rr_large_natural/rtuo8hxap892w3axda7z.jpg", location: "California", date: Date.new(2024, 4, 24), user_id: User.first.id)
FootageLog.create(name: "Fourth Try", image: "https://static.rootsrated.com/image/upload/s--s8KOEgTn--/t_rr_large_natural/rtuo8hxap892w3axda7z.jpg", location: "California", date: Date.new(2024, 4, 24), user_id: User.first.id)


Video.create(url: "hi", description: "Fun", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "hi1", description: "Fun1", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "hi2", description: "Fun2", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "hi3", description: "Fun3", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "hi4", description: "Fun4", footage_log_id: FootageLog.all.sample.id)
