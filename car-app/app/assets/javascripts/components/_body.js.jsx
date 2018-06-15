// calls the server api and passes the state to all_cars

// allcars are being rendered inside this body component

class Body extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cars: []
		}
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	handleFormSubmit(name, description) {
		console.log(name, description)
	}
	// handle the fetch request to the server
	componentDidMount() {
		fetch('/api/v1/cars.json').then((response) => {return response.json()}).then((data) => {this.setState({cars: data}) });
	}
	render() {
		return(
			<div>
				<NewCar handleFormSubmit={this.handleFormSubmit}/>
				<AllCars cars={this.state.cars} />

			</div>
		)
	}
}