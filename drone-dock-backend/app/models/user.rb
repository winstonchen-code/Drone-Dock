class User < ApplicationRecord
    has_many :footage_logs 

    has_secure_password
    validates :username, uniqueness: { case_sensitive: false}
end
