import Header from './shared/Header';
import Home from './components/Home';
import About from './components/About';
import Admin from './components/Admin';
import Create from './components/Create';
import Update from './components/Update';
import Login from './components/Login';
import Footer from './shared/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Admin/>
      <Create/>
      <Update/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
