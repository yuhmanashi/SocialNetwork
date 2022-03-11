class ChangeComments < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :parent_comment, :parent_comment_id 
  end
end
