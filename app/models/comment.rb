class Comment < ApplicationRecord
    validates :body, presence: true

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post

    has_many :child_comments,
        primary_key: :id,
        foreign_key: :parent_comment_id,
        class_name: :Comment

    has_many :likes, dependent: :destroy,
        foreign_key: :comment_id,
        class_name: :Like
end