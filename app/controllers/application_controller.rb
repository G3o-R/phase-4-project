class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

  private

  def record_not_found_response
    render json: {errors: "model not found"}, status: :not_found
  end

end
