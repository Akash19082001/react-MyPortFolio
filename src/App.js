import './App.css';
import About from './Components/About';
import Contect from './Components/Contect';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Resume from './Components/Resume';

function App() {
  return (
    <div className="App">
       <Header/>
       <Hero/>
       <About/>
       <Projects/>
       <Resume/>
       <Contect/>
       <Footer/>
    </div>
  );
}

export default App;
