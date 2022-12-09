class StopoversController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def show
        stop_over = Stop_over.find(params[:id])
        render json: stop_over
    end

    def create
        stop_over = Stop_over.create!(stop_over_params)
        render json: stop_over, status: :created
    end

    private

    def render_not_found_response
        render json: { error: "Stop_over not found" }, status: :not_found
    end

    def render_unprocessable_entity_response
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def stop_over_params
        params.permit(:name, :activity, :destination_id)
    end

end
