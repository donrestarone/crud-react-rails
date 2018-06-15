// calls the server api and passes the state to all_cars

// allcars are being rendered inside this body component

class Body extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			cars: []
		}
		// for binding the new car state and manipulating the DOM without refreshing the page
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.addNewCar = this.addNewCar.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this)
		this.updateCar = this.updateCar.bind(this)

	}

	// Make put request to server
	handleUpdate(car) {
		fetch(`https://react-cars.herokuapp.com/api/v1/cars/${car.id}`, {
			method: 'PUT',
			body: JSON.stringify({car: car}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			this.updateCar(car)
		})
	}
	// filter out the updated car and make the state the current list of cars
	updateCar(car) {
		let newCars = this.state.cars.filter((updatedCar) => updatedCar.id !== car.id)
		newCars.push(car)
		this.setState({
			cars: newCars
		})
	}
	// makes a delete request to the server
	handleDelete(id) {
		fetch(`https://react-cars.herokuapp.com/api/v1/cars/${id}`, {
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

		fetch('https://react-cars.herokuapp.com/api/v1/cars', {
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
		fetch('https://react-cars.herokuapp.com/api/v1/cars.json').then((response) => {return response.json()}).then((data) => {this.setState({cars: data}) });
	}
	render() {
		return(
			<div>
				<NewCar handleFormSubmit={this.handleFormSubmit}/>
				<AllCars cars={this.state.cars} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>
			</div>
		)
	}
}