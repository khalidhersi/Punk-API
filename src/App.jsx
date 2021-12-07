import './App.scss';
//import NavBar from './components/NavBar/NavBar';
import CardList from './containers/CardList/CardList';
import NavBar from "./components/NavBar/NavBar"

const App = () => {
  return (
    <div className="App">
      <nav className="nav">
        <NavBar />
      </nav>
      <CardList />
    </div>
  );
}

export default App;
