class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :email, :phone_number, :status
  belongs_to :user
  belongs_to :job
end
