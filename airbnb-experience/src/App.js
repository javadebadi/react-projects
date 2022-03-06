import './App.css';
import Header from './components/header.js'
import Hero from './components/hero.js'
import HostsCard from './components/hosts_card.js'
import hostCardsData from './data.js'

function App() {
  console.log("App", hostCardsData)
  return (
    <div className="App">
      <Header />
      <Hero />
      <HostsCard hostCardsData={hostCardsData} />
    </div>
  );
}

export default App;
