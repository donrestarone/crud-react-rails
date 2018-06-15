const NewCar = (props) => {
	let formFields = {}

	return(
		<div>
			<input ref={input => formFields.name = input} placeholder='Enter the Name of the Car' />
			<input ref={input => formFields.description = input} placeholder='Enter a Description About the Car' />
			<button>Submit</button>
		</div>
	)
}