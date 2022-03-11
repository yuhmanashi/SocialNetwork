<<<<<<< HEAD
json.extract! user, :id, :first_name, :last_name, :email
=======
<<<<<<< HEAD
json.extract! user, :id, :first_name, :last_name, :email, :biography, :birthday

json.posts do 
    user.posts.each do |post|
        json.set! post.id do 
            json.extract! post, :id, :body, :author_id, :created_at
        end
    end
end

json.friends do
    user.friends.each do |friend|
        json.set! friend.id do
            json.extract! friend, :user_id, :friend_id
        end
    end
end
=======
json.extract! user, :id, :first_name, :last_name, :email
>>>>>>> main
>>>>>>> branch2
