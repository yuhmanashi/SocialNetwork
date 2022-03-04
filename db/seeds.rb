# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all

demo = User.create(first_name: 'Valuable', last_name: 'Guest', email: 'demo@socialnetwork.com', password: 'password')
user1 = User.create(first_name: 'Yao', last_name:'Xu', email: 'yao@sn.com', password: 'password')
user2 = User.create(first_name: 'Dean', last_name:'Dean', email: 'dean@sn.com', password: 'password')

post1 = Post.create!(body: "Posty post", author_id: 23)
post2 = Post.create!(body: "Another post", author_id: 23)
post3 = Post.create!(body: "One more for yah", author_id: 23)
post4 = Post.create!(body: "Ok last post for now", author_id: 23)