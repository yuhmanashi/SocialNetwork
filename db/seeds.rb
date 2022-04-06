# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create(first_name: 'Demo', last_name: 'User', email: 'demo@socialnetwork.com', password: 'password', biography: 'Demo life');
user1 = User.create(first_name: 'Yao', last_name:'Xu', email: 'yao@sn.com', password: 'password', biography: 'I AM DEV');
user2 = User.create(first_name: 'Dean', last_name:'Dean', email: 'dean@sn.com', password: 'password');
user3 = User.create(first_name: 'Evan', last_name: 'Evan', email: 'evan@sn.com', password: 'password');
user4 = User.create(first_name: 'Josh', last_name:'Joshy', email: 'josh@sn.com', password: 'password');
user5 = User.create(first_name: 'Law', last_name:'Law', email: 'law@sn.com', password: 'password');
user6 = User.create(first_name: 'Bat', last_name: 'Man', email: 'bat@sn.com', password: 'password');
user7 = User.create(first_name: 'Sony', last_name:'Ttark', email: 'sony@sn.com', password: 'password');
user8 = User.create(first_name: 'Larry', last_name:'Otter', email: 'larry@sn.com', password: 'password');
user9 = User.create(first_name: 'Drake', last_name: 'CLB', email: 'drake@sn.com', password: 'password');

post4 = Post.create!(body: "My dog ate my homework, legit", author_id: user1.id);
post5 = Post.create!(body: "nanananananana", author_id: user6.id);
post3 = Post.create!(body: "What should I get at McDonald's?", author_id: user2.id);
post6 = Post.create!(body: "Kiki, do u love me", author_id: user9.id);
post2 = Post.create!(body: "Okay not anymore.", author_id: user1.id);
post1 = Post.create!(body: "The weather is nice.", author_id: user1.id);

comment1 = Comment.create!(body: "Give it a minute", post_id: post1.id, author_id: user2.id);
comment2 = Comment.create!(body: "Look outside now", post_id: post1.id, author_id: user3.id);
comment3 = Comment.create!(body: "That changed real quick", post_id: post2.id, author_id: user4.id);
comment4 = Comment.create!(body: "Lol", post_id: post3.id, author_id: user1.id);

friend1 = Friend.create!(user_id: user1.id, friend_id: user2.id, status: 'true');
friend2 = Friend.create!(user_id: user2.id, friend_id: user1.id, status: 'true');
friend3 = Friend.create!(user_id: user1.id, friend_id: user3.id, status: 'sent');
friend4 = Friend.create!(user_id: user3.id, friend_id: user1.id, status: 'requested');

#Demo seeds
post0 = Post.create!(body: "Looking for friends", author_id: demo.id);
comment0 = Comment.create!(body: "Please", post_id: post0.id, author_id: demo.id);
comment00 = Comment.create!(body: "I am your friend", post_id: post0.id, author_id: user1.id);
friend0 = Friend.create!(user_id: demo.id, friend_id: user1.id, status: 'true');
friend00 = Friend.create!(user_id: user1.id, friend_id: demo.id, status: 'true');
friend000 = Friend.create!(user_id: demo.id, friend_id: user2.id, status: 'sent');
friend0000 = Friend.create!(user_id: user2.id, friend_id: demo.id, status: 'requested');
friend00000 = Friend.create!(user_id: demo.id, friend_id: user3.id, status: 'requested');
friend000000 = Friend.create!(user_id: user3.id, friend_id: demo.id, status: 'sent');