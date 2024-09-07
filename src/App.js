import './App.css';
import About from './components/About';
import Application from './components/Application';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Services from './components/Services';


import 'animate.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Menu />
      <Application />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
