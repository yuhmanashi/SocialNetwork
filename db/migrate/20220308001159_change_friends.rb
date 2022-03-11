class ChangeFriends < ActiveRecord::Migration[5.2]
  def change
    add_column :friends, :added, :boolean
  end
end
