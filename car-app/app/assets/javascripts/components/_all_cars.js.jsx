class AllCars extends React.Component {

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
		var cars = this.state.cars.map((car) => {
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
}