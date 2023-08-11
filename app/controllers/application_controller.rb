class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  private

  def record_not_found_response
    render json: {errors: "model not found"}, status: :not_found
  end

  def render_unprocessable_entity_response(invalid)
    render json: {errors: invalid.recor.errors.full_messages}, status: :unprocessable_entity
  end

end
