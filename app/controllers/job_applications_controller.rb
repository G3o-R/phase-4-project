class JobApplicationsController < ApplicationController
    def create
        job_applications = @current_user.job_applications.create!(application_params)
        render json: job_applications
    end

    def index
        render json: JobApplication.all
    end

    def update 
        job_applications = @current_user.job_applications.find(params[:id])
        job_applications.update!(application_params)
        render json: job_applications
    end

    def destroy 
        job_application = @current_user.job_applications.find(params[:id])
        job_application.destroy
        head :no_content
    end

    private
    def application_params
        params.permit(:email, :phone_number,:job_id, :status)
    end

end
