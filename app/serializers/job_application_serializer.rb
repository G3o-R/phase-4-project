class JobApplicationSerializer < ActiveModel::Serializer
  attributes :id, :email, :phone_number, :status, :location, :company, :description, :position, :job_id
  belongs_to :user

  def description
    object.job.description
  end
  def position
    object.job.position
  end
  def company
    object.job.company
  end
  def location
    object.job.location
  end
end
