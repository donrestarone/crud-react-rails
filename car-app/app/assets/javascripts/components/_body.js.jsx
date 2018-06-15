// calls the server api and passes the state to all_cars

// allcars are being rendered inside this body component

class Body extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cars: []
		}
		// for binding the new car state and manipulating the DOM without refreshing the page
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.addNewCar = this.addNewCar.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}
	// makes a delete request to the server
	handleDelete(id) {
		fetch(`http://localhost:3000/api/v1/cars/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			this.deleteCar(id)
			console.log('Car was deleted!')
		})
	}

	// updates the state by filtering out the car that was just deleted
	deleteCar(id) {
		newCars = this.state.cars.filter((car) => car.id !== id)
		this.setState({
			cars: newCars
		})
	}
	// makes post request to server and calls add new car
	handleFormSubmit(name, description) {
		let body = JSON.stringify({car: {name: name, description: description} })

		fetch('http://localhost:3000/api/v1/cars', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: body,
		}).then((response) => {return response.json()}).then((car) => {
			this.addNewCar(car)
		})
	}

	// sets the new state using setstate()
	addNewCar(car) {
		this.setState({
			cars: this.state.cars.concat(car)
		})
	}

	// handle the fetch request to the server to get all cars
	componentDidMount() {
		fetch('/api/v1/cars.json').then((response) => {return response.json()}).then((data) => {this.setState({cars: data}) });
	}
	render() {
		return(
			<div>
				<NewCar handleFormSubmit={this.handleFormSubmit}/>
				<AllCars cars={this.state.cars} handleDelete={this.handleDelete}/>

			</div>
		)
	}
}