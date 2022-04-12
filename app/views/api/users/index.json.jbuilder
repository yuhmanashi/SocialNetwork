@users.each do |user|
  json.users do
    json.set! user.id do
      json.extract! user, :id, :first_name, :last_name, :email, :biography, :birthday, :photo, :cover_photo
    end
  end

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
              json.extract! friend, :id, :user_id, :friend_id, :status
          end
      end
    end

    json.comments do
      user.comments.each do |comment|
          json.set! comment.id do
              json.extract! comment, :id, :body, :author_id, :post_id
          end
      end
    end
end