class User < ApplicationRecord
    has_secure_password
  
    has_many :applications
    has_many :jobs, through: :applications
  
    validates :username, presence: true, uniqueness: true
  end