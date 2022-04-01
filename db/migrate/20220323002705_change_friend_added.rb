class ChangeFriendAdded < ActiveRecord::Migration[5.2]
  def change
    remove_column :friends, :added
    add_column :friends, :status, :text
  end
end
