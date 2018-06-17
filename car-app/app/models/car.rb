class Car < ApplicationRecord
	validates :name, presence: true, allow_blank: false
	#validates :description, presence: true, allow_blank: false

	def self.call_giphy(car, picture)
		key = ENV['GIPHY_KEY']
		giphy_response = JSON.parse((HTTParty.get("http://api.giphy.com/v1/gifs/search?api_key=#{key}&q=#{car.name}")).body)
		gif = Car.find_gif(giphy_response["data"])
		car.picture = gif.sample
		return car
	end

	def self.find_gif(giphy_response)
		gif_array = []
		while gif_array.count < 10
			giphy_response.each do |array_index|
				gif_array.push array_index["images"]["fixed_height"]["url"]

			end
		end
		return gif_array
	end
end
