function PhilosopherDetails({selectedPhilosopher}){
	return(
		<section>
			<h3>{selectedPhilosopher.name}</h3>
			<h4>Born: {selectedPhilosopher.born}</h4>
			<h4>Died: {selectedPhilosopher.died}</h4>
			<h4>Major field of contribution: {selectedPhilosopher.majorField}</h4>
			<h4>Fundamental Work: {selectedPhilosopher.fundamentalWork}</h4>
			<h4>Famous Quote: {selectedPhilosopher.famousQuote}</h4>   
		</section>
	);
}

export default PhilosopherDetails;
