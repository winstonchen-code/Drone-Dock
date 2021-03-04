class User < ApplicationRecord
    has_many :footage_logs 

    has_secure_password
    validates :email, uniqueness: { case_sensitive: false}
end
