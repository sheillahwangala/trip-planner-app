class StopoversController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def show
        stopover = StopOver.find(params[:id])
        render json: stop_over
    end

    def create
        stopover = StopOver.create!(stopover_params)
        render json: stop_over, status: :created
    end

    private

    def render_not_found_response
        render json: { error: "Stopover not found" }, status: :not_found
    end

    def render_unprocessable_entity_response
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def stopover_params
        params.permit(:name, :activity, :destination_id)
    end

end
