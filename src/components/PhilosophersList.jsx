import {philosophers} from '../data.js';
import Philosopher from './Philosopher';

function PhilosophersList(){
	return <ul>{ philosophers.map( phil => <li key={phil.name}><Philosopher philosopher={phil} /></li> ) }</ul>;
}

export default PhilosophersList;