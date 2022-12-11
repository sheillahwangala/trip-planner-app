# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

trip1 = Trip.create(
   title: "Jamuhuri gate-away",
   start_date: "Dec 11th 2022",
    end_date: "Dec 12th 2022",
)

destination1 = Destination.create(
    name: "Serena Elementaita",
    location: "Naivasha",
    notes: "enjoy scenary, have fun",
    photos: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/82/10.jpg",
    trip_id: 1
   
)