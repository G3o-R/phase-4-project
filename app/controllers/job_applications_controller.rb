class JobApplicationsController < ApplicationController
    def create
        job_applications = JobApplication.create!(application_params)
    end

    private
    def application_params
        params.permit(:email, :phone_number, :user_id, :job_id)
    end
end
