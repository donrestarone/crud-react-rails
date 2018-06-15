// stateless and presentational
// cars list is rendered by this stateless component
const AllCars = (props) => {

	var cars = props.cars.map((car) => {
		return(
			<div key={car.id}>
				<h1>{car.name}</h1>
				<p>{car.description}</p>
			</div>
		)
	})
	
	return(
		<div>
			{cars}
		</div>
	)

}