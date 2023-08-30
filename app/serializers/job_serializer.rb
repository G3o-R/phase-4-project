class JobSerializer < ActiveModel::Serializer
  attributes :id, :description, :pay, :location, :position, :company, :about_the_job
  has_many :job_applications
  has_many :applicants, through: :job_applications, source: :user

end
