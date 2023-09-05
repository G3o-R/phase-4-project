class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :job_applications
end
