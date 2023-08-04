class JobsController < ApplicationController
    def index
        render json: {message: "testing"}
    end
end
