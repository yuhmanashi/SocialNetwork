class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.boolean :like, null: false
      t.integer :user_id, null: false
      t.integer :post_id
      t.integer :comment_id

      t.timestamps
    end

    add_index :likes, :like
    add_index :likes, :user_id
  end
end
