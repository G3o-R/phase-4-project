class JobApplicationsController < ApplicationController
    before_action :authorize
    def create
        job_applications = @current_user.job_applications.create!(application_params)
        render json: job_applications
    end

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
        params.permit(:email, :phone_number, :job_id, :status)
    end

end
