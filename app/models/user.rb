class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :first_name, :last_name, :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :friends,
        foreign_key: :user_id,
        class_name: :Friend

    has_many :friended,
        foreign_key: :friend_id,
        class_name: :Friend

    has_many :posts,
        foreign_key: :author_id,
        class_name: :Post
    
    has_many :comments,
        foreign_key: :author_id,
        class_name: :Comment

    has_many :likes, dependent: :destroy,
        foreign_key: :user_id,
        class_name: :Like
    
    has_one_attached :photo

    has_one_attached :cover_photo

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    # maybe try urlsafe_base64
    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end
end