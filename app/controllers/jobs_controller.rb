class JobsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    def create
        new_job = Job.create!(job_params)
        render json: new_job, status: :created
    end
    
    def index
        jobs = Job.all
        render json: jobs
    end

    private
    def job_params
        params.permit(:description,:pay,:location,:position,:company,:about_the_job)
    end
end
