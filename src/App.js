import Header from './components/Header'
import Showcase from './components/Showcase'
import Footer from './components/Footer'
import About from './components/About'
import Plants from './components/Plants'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' exact render={(props) => (
          <Showcase />
        )} />
        <Route path='/about' exact render={(props) => (
          <About />
        )} />
        <Route path='/plants' exact render={(props) => (
          <Plants />
        )} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
