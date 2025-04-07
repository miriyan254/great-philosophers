function Philosopher({philosopher}) {
  return (
		<>
			<img src={philosopher.image} alt={philosopher.name} width={philosopher.width} height={philosopher.height} />
			<h3>{philosopher.name}</h3>
			<button type='button'>More</button>
		</>
	);
}

export default Philosopher;