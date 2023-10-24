class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :user_applications]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show
        render json: @current_user
    end
    # not looking for perfect code
#     (1..10).find_all { |i|  i % 3 == 0 }   #=> [3, 6, 9]

# [1,2,3,4,5].select { |num|  num.even?  }   #=> [2, 4]

# [:foo, :bar].filter { |x| x == :foo }   #=> [:foo]

    def user_applications
        user_applications = User.all.filter{ |user| user.job_applications.length >= params[:n].to_i }

        render json: user_applications
    end
    

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
