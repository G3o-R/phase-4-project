class JobApplication < ApplicationRecord
  belongs_to :user
  belongs_to :job

  validates :email, presence: true
  validates :phone_number, presence: true
  validates :status, presence: true
end
