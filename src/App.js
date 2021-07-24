import './App.css';
import Header from './Header';
import Nav from './Nav'
import Home from './Home'

function App() {
  return (
    <div className="app">
      {/* <h2>Welcome to Expressdotcom</h2> */}
      <Header />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
