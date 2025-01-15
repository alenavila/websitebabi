import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle='LEISTUNGEN' title='Was wir Ihnen bieten'/>
      <Programs/>
      </div>
      
    </div>
  );
}

export default App;
