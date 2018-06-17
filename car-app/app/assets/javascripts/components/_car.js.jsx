class Car extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			editable: false
		}
		this.handleEdit = this.handleEdit.bind(this)
	}
	
	handleEdit() {
		if (this.state.editable) {
			let name = this.name.value
			let description = this.description.value
			let id = this.props.car.id
			let car = {id: id, name: name, description: description}
			this.props.handleUpdate(car)
		}
		this.setState({
			editable: !this.state.editable
		})
	}
	render() {
		let name = this.state.editable ? <input class="form-control" type='text' ref={input => this.name = input} defaultValue={this.props.car.name}/>:<h3>{this.props.car.name}</h3>
		let description = this.state.editable ? <input class="form-control" type='text' ref={input => this.description = input} defaultValue={this.props.car.description}/>:<p>{this.props.car.description}</p>
		let picture = <div class="container"><img class="img-fluid" src={this.props.car.picture}/></div>

		return(
			<div>
				<br />
				{name}
				{description}
				{picture}
				<br />
				<div class="btn-group">
					<button class="btn btn-secondary btn-sm" onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
					<button class="btn btn-danger btn-sm" onClick={() => this.props.handleDelete(this.props.car.id)}>Delete</button>
				</div>
			</div>
		)
	}
}