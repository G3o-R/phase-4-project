class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :job_applications
  has_many :jobs, through: :job_applications
end
