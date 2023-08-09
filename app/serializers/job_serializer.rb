class JobSerializer < ActiveModel::Serializer
  attributes :id, :description, :pay, :location, :position, :company
end
