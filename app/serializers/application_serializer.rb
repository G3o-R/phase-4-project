class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :email, :phone_number
  has_one :user
  has_one :job
end
