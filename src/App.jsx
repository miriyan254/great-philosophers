import { useState } from 'react';
import {philosophers} from './data.js';
import Header from './components/Header';
import PhilosophersList from './components/PhilosophersList';
import PhilosopherDetails from './components/PhilosopherDetails';

function App() {

  const [selected, setSelected] = useState(null);
   
	function select(x) {
		setSelected(x);  
	}
  
  return (
    <>
      <Header />
      <main>
        <PhilosophersList philosophers={philosophers} handleSelect={select}/>
        {selected && <PhilosopherDetails selectedPhilosopher={selected} />}
      </main>  
    </>
  );
}

export default App;
