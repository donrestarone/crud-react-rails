class Car extends React.Component {
	render() {
		return(
			<div>
				<h1>{this.props.car.name}</h1>
				<p>{this.props.car.description}</p>
				<button onClick={() => this.props.handleDelete(this.props.car.id)}>Delete</button>
			</div>
		)
	}
}