const NewCar = (props) => {
	let formFields = {}

	return(
		<div>
			<p>Enter a new car into the database</p>
			<input ref={input => formFields.name = input} placeholder='ex; Beige Toyota Camry' />
			<input ref={input => formFields.description = input} placeholder='Engine oil optional' />
			<button onClick={() => props.handleFormSubmit(formFields.name.value, formFields.description.value)}>Submit</button>
		</div>
	)
}