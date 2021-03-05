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


Video.create(url: "https://www.youtube.com/watch?v=Zo5aDMbn4io", description: "Trip to Alaska", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/embed/HSsqzzuGTPo", description: "Fun trip to California", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/embed/Y1zhsObP49o", description: "Top view of Ice", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/embed/Y1zhsObP49o", description: "Took a trip to the beach", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=IM6od1FTPPE", description: "Basketball practice", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=Zo5aDMbn4io", description: "Dog run", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/embed/HSsqzzuGTPo", description: "Cool Drone Shots", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=BZuE6Q-RGus", description: "Spin around view at lake", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=Y1zhsObP49o", description: "Fast drone shots", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/embed/Y1zhsObP49o", description: "Karma Drone Footage", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=Zo5aDMbn4io", description: "Mavic Footage", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/embed/Y1zhsObP49o", description: "Trip to lake", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=BZuE6Q-RGus", description: "Short drone footage", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=Y1zhsObP49o", description: "Fun drone footage", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=IM6od1FTPPE", description: "Slow drone shots", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=Zo5aDMbn4io", description: "Trip to Alaska", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/embed/HSsqzzuGTPo", description: "Fun trip to California", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=BZuE6Q-RGus", description: "Top view of Ice", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=Y1zhsObP49o", description: "Took a trip to the beach", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=IM6od1FTPPE", description: "Basketball practice", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=Zo5aDMbn4io", description: "Dog run", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/embed/HSsqzzuGTPo", description: "Cool Drone Shots", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=BZuE6Q-RGus", description: "Spin around view at lake", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=Y1zhsObP49o", description: "Fast drone shots", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=IM6od1FTPPE", description: "Karma Drone Footage", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=Zo5aDMbn4io", description: "Mavic Footage", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/embed/HSsqzzuGTPo", description: "Trip to lake", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=BZuE6Q-RGus", description: "Short drone footage", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=Y1zhsObP49o", description: "Fun drone footage", footage_log_id: FootageLog.all.sample.id)
Video.create(url: "https://www.youtube.com/watch?v=IM6od1FTPPE", description: "Slow drone shots", footage_log_id: FootageLog.all.sample.id)
