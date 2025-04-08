import Philosopher from './Philosopher';

function PhilosophersList({philosophers}){
	return <ul>{ philosophers.map( phil => <li key={phil.name}><Philosopher philosopher={phil} /></li> ) }</ul>;
}

export default PhilosophersList;