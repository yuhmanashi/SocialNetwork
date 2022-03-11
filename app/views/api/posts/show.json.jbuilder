# json.extract! @post, :id, :author_id, :body, :created_at, :updated_at
# json.extract! @post.user, :first_name, :last_name

json.partial! 'post', post: @post
# json.extract! @post.user, :first_name, :last_name
# json.extract! post.comments.each do |comment|
#     json.set! comment.id do
#       json.extract comment, :body
#     end
# end