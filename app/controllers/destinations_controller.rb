class DestinationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        destinations = Destination.all
        render json: destinations
    end

    def show
        destination = Destination.find(params[:id])
        render json: destination
    end

    private

    def render_not_found_response
        render json: { error: "Destination not found" }, status: :not_found
    end
    
end
