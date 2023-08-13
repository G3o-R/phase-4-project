class JobApplicationsController < ApplicationController
    # skip_before_action :authorize, only: [:index]
    def create
        job_applications = JobApplication.create!(application_params)
    end
    # read will be handled by an "includes" in user

    def update 
        job_application = Job.find(params[:id])
        job_application.update(application_params)
        rendder json: job_application
    end

    def destroy 
        job_application = Job.find(params[:id])
        job_application.destroy
        head :no_content
    end

    private
    def application_params
        params.permit(:email, :phone_number, :user_id, :job_id, :status)
    end

end
