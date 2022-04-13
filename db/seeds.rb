# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create(first_name: 'Demo', last_name: 'User', email: 'demo@socialnetwork.com', password: 'password', biography: 'Demo life', birthday: '2/20/2000');
user1 = User.create(first_name: 'Yao', last_name:'Xu', email: 'yao@sn.com', password: 'password', biography: 'I AM DEV', birthday: '3/3/2003');
user2 = User.create(first_name: 'Dean', last_name:'Dean', email: 'dean@sn.com', password: 'password');
user3 = User.create(first_name: 'Evan', last_name: 'Evan', email: 'evan@sn.com', password: 'password');
user4 = User.create(first_name: 'Josh', last_name:'Joshy', email: 'josh@sn.com', password: 'password');
user5 = User.create(first_name: 'Law', last_name:'Law', email: 'law@sn.com', password: 'password');
user6 = User.create(first_name: 'Yao\'s', last_name: 'Mom', email: 'yaomom@sn.com', password: 'password');
user7 = User.create(first_name: 'Yao\'s', last_name:'Advisor', email: 'yaoadvisor@sn.com', password: 'password');
user8 = User.create(first_name: 'Future', last_name:'Boss', email: 'boss@sn.com', password: 'password');
user9 = User.create(first_name: 'Yao\'s', last_name: 'Friend', email: 'friend@sn.com', password: 'password');

post3 = Post.create!(body: "Yao has shown tremendous progress in the past 4 monthes", author_id: user7.id);
post2 = Post.create!(body: "This Yao kid seems very promising, put him at the top of the list", author_id: user8.id);
post1 = Post.create!(body: "Working with Yao is a pleasure, I can always count on him to get things done", author_id: user9.id);
post4 = Post.create!(body: "Hire my son, he is very responsible", author_id: user6.id);
post5 = Post.create!(body: "Excited to be applying for jobs", author_id: user1.id);

comment1 = Comment.create!(body: "Good luck!", post_id: post5.id, author_id: user2.id);
comment2 = Comment.create!(body: "Hire him already", post_id: post2.id, author_id: user3.id);
comment3 = Comment.create!(body: "Thanks mom", post_id: post4.id, author_id: user1.id);
comment4 = Comment.create!(body: "Can confirm that this is true", post_id: post1.id, author_id: user5.id);

friend1 = Friend.create!(user_id: user1.id, friend_id: user2.id, status: 'true');
friend2 = Friend.create!(user_id: user2.id, friend_id: user1.id, status: 'true');
friend3 = Friend.create!(user_id: user1.id, friend_id: user3.id, status: 'sent');
friend4 = Friend.create!(user_id: user3.id, friend_id: user1.id, status: 'requested');

#Demo seeds
post0 = Post.create!(body: "Looking for friends", author_id: demo.id);
comment0 = Comment.create!(body: "Bump", post_id: post0.id, author_id: demo.id);
comment00 = Comment.create!(body: "Added!", post_id: post0.id, author_id: user1.id);
friend0 = Friend.create!(user_id: demo.id, friend_id: user1.id, status: 'true');
friend00 = Friend.create!(user_id: user1.id, friend_id: demo.id, status: 'true');
friend000 = Friend.create!(user_id: demo.id, friend_id: user2.id, status: 'sent');
friend0000 = Friend.create!(user_id: user2.id, friend_id: demo.id, status: 'requested');
friend00000 = Friend.create!(user_id: demo.id, friend_id: user3.id, status: 'requested');
friend000000 = Friend.create!(user_id: user3.id, friend_id: demo.id, status: 'sent');