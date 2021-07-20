import './App.css';
import { NameForm } from './components/Form';
import { Orders } from './components/GetOrders';
import RestaurantIcon from '@material-ui/icons/Restaurant';

function App() {
  return (
  <div className="App"> 
  <header>
	  <div class="overlay">
      <h1>HEB's Pizza</h1>
      <RestaurantIcon />
		</div>
  </header>
  <br />
  <h2> Lets order a pizza! </h2>
  <br />
  <Orders />
  <NameForm />
  </div>
  );
}

export default App;
