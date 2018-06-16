class Api::V1::CarsController < ApplicationController
	def index
		render json: Car.all
	end

	def create
		car = Car.new(car_params)
		if car.save
			render json: car
		else 
			render json: car.errors, status: :bad_request
		end
	end

	def destroy
		Car.destroy(params[:id])
	end

	def update
		car = Car.find(params[:id])
		if car.update(car_params)
			render json: car
		else 
			render json: {
				message: 'error'
			}, status: 400
		end
	end

	private

	def car_params
		params.require(:car).permit(:id, :name, :description)
	end
end