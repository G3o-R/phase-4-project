class JobSerializer < ActiveModel::Serializer
  attributes :id, :description, :pay, :location, :position, :company, :about_the_job
end
