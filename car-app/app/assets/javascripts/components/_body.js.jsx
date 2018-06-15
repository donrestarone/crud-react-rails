// calls the server api and passes the state to all_cars

// allcars are being rendered inside this body component

class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cars: []
		}
	}
	componentDidMount() {
		fetch('/api/v1/cars.json').then((response) => {return response.json()}).then((data) => {this.setState({cars: data}) });
	}
	render() {
		return(
			<div>

				<AllCars cars={this.state.cars} />
				<NewCar />
			</div>
		)
	}
}