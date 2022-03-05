import './App.css';
import Header from './components/header.js'
import Hero from './components/hero.js'
import HostsCard from './components/hosts_card.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <HostsCard />
    </div>
  );
}

export default App;
