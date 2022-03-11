@comments.each do |comment|
    json.set! comment.id do
      json.partial! 'comment', comment: comment
      json.extract! comment.user, :first_name, :last_name
    end
end