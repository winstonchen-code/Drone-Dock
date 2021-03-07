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


User.create(name: "Winston", bio: "Karma Drone owner. Passionate about drone videography and specialize in natural landscapes.", image: "https://www.backscatter.com/ITEM_IMAGES/gp-qkwxx-006_1.jpg?resizeid=6&resizeh=600&resizew=600", email: "winston@gmail.com", password: "123")
User.create(name: "Tommy", bio: "Flation School student studying SE. Mavic owner that enjoys bringing my drone to the beach!", image: "https://cdn.vox-cdn.com/thumbor/PLKDOgEwdQYplu1NWdsyKYehRCI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19330110/dji_mavic_mini_drone_1418.jpg", email: "tommy@gmail.com", password: "123")
User.create(name: "Kelly", bio: "DJI Mavic 2 Pro owner. Full time drone videographer. My favorite shots are at natural parks!", image: "https://cdn.vox-cdn.com/thumbor/b6LaeKVBzF5y8Z11VSnwb_4UjrM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/7174623/dji-mavic-pro-drone-2445.0.jpg", email: "kelly@gmail.com", password: "123")

FootageLog.create(name: "Summer Trip to Burke Lake", image: "https://s3-media0.fl.yelpcdn.com/bphoto/Aiu-fAjow_Fo97sVDWqzIg/348s.jpg", location: "Virginia", date: Date.new(2018, 8, 21), user_id: User.first.id)
FootageLog.create(name: "Old Rag Hike", image: "https://bloximages.newyork1.vip.townnews.com/breezejmu.org/content/tncms/assets/v3/editorial/a/6e/a6ea7fe2-a4d6-11e4-b512-2bc12bf80497/54c55bdfcb655.image.jpg", location: "Virginia", date: Date.new(2016, 2, 22), user_id: User.first.id)
FootageLog.create(name: "Beach Trips", image: "https://img.travelawaits.com/filter:centercrop/quill/0/c/1/c/3/0/0c1c30926d3d061b22448720bdbcc6bc5f1822a2.jpg?w=800&h=800", location: "New Jersey", date: Date.new(2015, 10, 23), user_id: User.first.id)
FootageLog.create(name: "Japan Footage", image: "https://cdn1.i-scmp.com/sites/default/files/topics/2017/09/26/620-japan.jpg", location: "Japan", date: Date.new(2024, 4, 12), user_id: User.first.id)
FootageLog.create(name: "Family Trips", image: "https://cdn.vox-cdn.com/thumbor/nXkLTwTfALhEAQD8kmHE6gFpHSA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19883896/San_Francisco_GettyImages_1145192321.jpg", location: "California", date: Date.new(2016, 9, 24), user_id: User.first.id)
FootageLog.create(name: "Hawaii Beach Shots", image: "https://i.natgeofe.com/n/40f02b64-7726-4662-bd41-2d227442e7e3/aerial-seven-mile-miracle-north-shore-hawaii-aerial_square.jpg", location: "Hawaii", date: Date.new(2020, 8, 5), user_id: User.first.id)
FootageLog.create(name: "Basketball Aerial Footage", image: "https://i.ebayimg.com/images/g/X5kAAOSwNRJcgoO8/s-l400.jpg", location: "Virginia", date: Date.new(2017, 5, 21), user_id: User.first.id)
FootageLog.create(name: "Europe Trip", image: "https://www.thetrainline.com/cms/media/1360/france-eiffel-tower-paris.jpg?mode=crop&width=1080&height=1080&quality=70", location: "France", date: Date.new(2019, 10, 16), user_id: User.first.id)


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
