class JobsController < ApplicationController
    def create
        new_job = Job.create!(job_params)
        render json: new_job, status: :created
    end
    
    def index
        jobs = Job.all
        render json: jobs
    end
    
    def show 
        job = Job.find(params[:id])
        render json: job
    end
    
    def destroy
        job = Job.find(params[:id])
        job.destroy
        head :no_content
    end

    private
    def job_params
        params.permit(:description,:pay,:location,:position,:company)
    end
end
