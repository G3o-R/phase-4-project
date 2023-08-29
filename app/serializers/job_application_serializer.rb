class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :email, :phone_number, :status
  has_one :user
  has_one :job
end
