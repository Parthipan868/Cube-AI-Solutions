import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Solutions />
      <Footer />
    </div>
  );
}

export default App;
