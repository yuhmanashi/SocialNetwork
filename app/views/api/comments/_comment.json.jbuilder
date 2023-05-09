json.extract! comment, :id, :body, :post_id, :author_id, :parent_comment_id, :created_at
json.extract! comment.user, :first_name, :last_name

json.likes do
    comment.likes.each do |likes|
        json.set! like.id do
            json.extract! like, :id, :liked, :comment_id, :user_id
        end
    end
end