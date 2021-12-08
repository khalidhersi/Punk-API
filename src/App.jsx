import './App.scss';
//import NavBar from './components/NavBar/NavBar';
import CardList from './containers/CardList/CardList';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div className="App">
        <Nav />
      <CardList />
    </div>
  );
}

export default App;
