class Api::V1::CarsController < ApplicationController
	def index
		# http://localhost:3000/api/v1/cars.json
		render json: Car.all
	end

	def create
		# http://localhost:3000/api/v1/cars.json
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