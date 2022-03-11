# @posts.each do |post|
#     json.set! post.id do
#         json.extract! post, :id, :author_id, :body, :created_at, :updated_at
#         json.extract! post.user, :first_name, :last_name
#     end
# end

@posts.each do |post|
    json.set! post.id do
      json.partial! 'post', post: post
      # json.extract! post.user, :first_name, :last_name
    end
end

# json.extract! post.comments.each do |comment|
#   json.set! comment.id do
#     json.extract comment, :body
#   end
# end