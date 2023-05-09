class ChangeLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :like
    add_column :likes, :liked, :boolean
  end
end
