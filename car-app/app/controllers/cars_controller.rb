class Api::V1::CarsController < ApplicationController
	def index
		render json: Car.all
	end

	def create
		car = Car.create(car_params)
		render json: car
	end

	def destroy
		Car.destroy(params[:id])
	end

	def update
		car = Car.find(params[:id])
		car.update_attributes(car_params)
		render json: car
	end

	private

	def car_params
		params.require(:car).permit(:id, :name, :description)
	end
end