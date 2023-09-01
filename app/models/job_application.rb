class JobApplication < ApplicationRecord
  belongs_to :user
  belongs_to :job

  validates :email, presence: true
  validates :phone_number, presence: true
  validates :status, presence: true
  validates :job_id, presence: true, uniqueness: true
end
