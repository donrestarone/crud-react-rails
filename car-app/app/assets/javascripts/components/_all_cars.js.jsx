// stateless and presentational
// cars list is rendered by this stateless component
// each car is rendered by class Car 
const AllCars = (props) => {

	var cars = props.cars.map((car) => {
		return(
			<div key={car.id}>
				<Car car={car} handleDelete={props.handleDelete}/>
			</div>
		)
	})

	return(
		<div>
			{cars}
		</div>
	)

}