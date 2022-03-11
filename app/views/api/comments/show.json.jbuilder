json.partial! 'comment', comment: @comment
json.extract! @comment.user, :first_name, :last_name