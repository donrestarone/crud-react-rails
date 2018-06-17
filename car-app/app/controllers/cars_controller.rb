class Api::V1::CarsController < ApplicationController
	def index
		# http://localhost:3000/api/v1/cars.json
		render json: Car.all
	end

	def create
		car = Car.create(car_params)
		car = Car.call_giphy(car, car.name)
		render json: car
	end

	def destroy
		Car.destroy(params[:id])
	end

	def update

		if Car.find(params[:id])
			car = car.update_attributes(car_params)
			Car.call_giphy(car, car.name)
		#car.update_attributes(car_params)
			render json: car
		end		
		
	end

	private

	def car_params
		params.require(:car).permit(:id, :name, :description)
	end
end