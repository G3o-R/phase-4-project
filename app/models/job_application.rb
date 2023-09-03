class JobApplication < ApplicationRecord
  belongs_to :user
  belongs_to :job

  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP, message: "should be a valid email address" }
  validates :phone_number, presence: true, format: { with: /\A\d{10}\z/, message: "should be a 10-digit number" }
  validates :status, presence: true
  validates :job_id, presence: true, uniqueness: true
end
