class TripsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        trips = Trip.all
        render json: trips
    end

    def show
        trip = Trip.find(params[:id])
        render json: trip
    end

    def create
        trip = Trip.create(trip_params)
        render json: trip, status: :created
    end

    private

    def render_not_found_response
        render json: { error: "Trip not found" }, status: :not_found
    end

    def trip_params
        params.permit(:title, :start_date, :end_date)
    end

end
