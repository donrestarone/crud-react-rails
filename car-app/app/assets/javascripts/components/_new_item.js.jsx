const NewCar = (props) => {
	let formFields = {}

	return(
		<form>
			<p>Enter a new car into the database</p>
			<div class="form-row">

				<div class="col">
					<input class="form-control" ref={input => formFields.name = input} placeholder='ex; Beige Toyota Camry' />
				</div>

				<div class="col">
					<input class="form-control" ref={input => formFields.description = input} placeholder='Engine oil optional' />
				</div>

			</div>
			<br />
				<div class="form-row">
					<div class="col">
						<button class="btn btn-primary" onClick={() => props.handleFormSubmit(formFields.name.value, formFields.description.value)}>Submit</button>
					</div>
				</div>
		</form>
	)
}