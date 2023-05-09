json.extract! post, :id, :body, :author_id, :created_at
json.extract! post.user, :first_name, :last_name

json.comments do 
    post.comments.each do |comment|
        json.set! comment.id do 
            json.extract! comment, :id, :body, :post_id, :author_id, :parent_comment_id, :created_at
        end
    end
end

json.likes do
    post.likes.each do |like|
        json.set! like.id do
            json.extract! like, :id, :liked, :post_id, :user_id
        end
    end
end