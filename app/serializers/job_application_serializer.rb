class JobApplicationSerializer < ActiveModel::Serializer
  attributes :id, :email, :phone_number, :status, :job_description, :job
  belongs_to :user
  belongs_to :job

  def job_description
    object.job.description
  end
end
