class UsersController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    

    private

    def user_params
        params.perit(:username, :password, :password_confirmation)
    end
end
