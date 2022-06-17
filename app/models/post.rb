class Post < ApplicationRecord
    validates :body, presence: true

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

    has_many :comments, dependent: :destroy,
        foreign_key: :post_id,
        class_name: :Comment

    has_many :likes, dependent: :destroy,
        foreign_key: :post_id,
        class_name: :Like
end