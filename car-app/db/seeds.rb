# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cars = ['E90 Series BMW M3', 'Mclaren F1 LongTail', 'Porsche 959 MobyDick', 'Mazda RX7 FD', 'Nissan R32 GTR']

cars.each{|car| Car.create(name: car, description: "This is a magnificient machine, the #{car}")}