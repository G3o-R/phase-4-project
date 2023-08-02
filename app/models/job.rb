class Job < ApplicationRecord
    has_many :applications
    has_many :applicants, through: :applications, source: :user
  
    validates :description, presence: true
    validates :pay, presence: true, numericality: { greater_than_or_equal_to: 0 }
    validates :location, presence: true
    validates :position, presence: true
    validates :company, presence: true
  end