import Philosopher from './Philosopher';

function PhilosophersList({philosophers, handleSelect}){
	return <ul>{ philosophers.map( phil => <li key={phil.name}><Philosopher philosopher={phil} handleOnClick={() => handleSelect(phil)} /></li> ) }</ul>;
}

export default PhilosophersList;