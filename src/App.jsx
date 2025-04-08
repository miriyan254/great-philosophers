import {philosophers} from './data.js';
import Header from './components/Header';
import PhilosophersList from './components/PhilosophersList';
import PhilosopherDetails from './components/PhilosopherDetails';

function App() {
  return (
    <>
      <Header />
      <main>
        <PhilosophersList philosophers={philosophers}/>
        <PhilosopherDetails selectedPhilosopher={philosophers[5]} />
      </main>  
    </>
  );
}

export default App;
