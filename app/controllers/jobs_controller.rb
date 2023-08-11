class JobsController < ApplicationController
    def index
        jobs = Job.all
        render json: jobs
    end
    def show 
        job = Job.find(params[:id])
        render json: job
    end
end
