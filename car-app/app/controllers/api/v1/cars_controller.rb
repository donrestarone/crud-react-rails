class Api::V1::CarsController < ApplicationController
	def index
		render json: Car.all
	end

	def create
		key = ENV['GIPHY_KEY']
		car = Car.new(car_params)
		if car.save
			giphy_response = JSON.parse((HTTParty.get("https://api.giphy.com/v1/gifs/search?api_key=#{key}&q=#{car.name}")).body)
			gifs = find_gif(giphy_response["data"])
			byebug
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

	def find_gif(giphy_response)
		gif_array = []
		giphy_response.each do |array_index|
			gif_array.push array_index["images"]["fixed_height"]["url"]
			return gif_array
		end
	end
end