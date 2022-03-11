json.partial! 'user', user: @user
# json.posts do 
#     @user.posts.each do |post|
#         json.set! post.id do
#             json.extract! post, :id, :body, :author_id, :created_at
#         end
#     end
# end