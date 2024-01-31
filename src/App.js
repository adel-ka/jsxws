import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaveBare from './Components/NaveBare';
import ProdoctList from './Components/ProdoctList';
import Fotter from './Components/Fotter';


function App() {
  return (
    <div className="App">
      <NaveBare/>
      <ProdoctList/>
      <Fotter/>
    </div>
  );
}

export default App;
