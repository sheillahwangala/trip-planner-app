class DestinationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        destinations = Destination.all
        render json: destinations
    end

    def show
        destination = Destination.find(params[:id])
        render json: destination
    end

    def create
        destination = Destination.create!(destination_params)
        render json: destination, status: :created
    end

    private

    def render_not_found_response
        render json: { error: "Destination not found" }, status: :not_found
    end

    def render_unprocessable_entity_response
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
    
    def destination_params
        params.permit(:name, :location, :notes, :photos)
    end
end
