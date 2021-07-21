import './App.css';
import { PizzaForm } from './components/Form';
import { Orders } from './components/GetOrders';
// import { Auth } from './components/Auth';
// import { SendOrders } from './components/SendOrders';
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
  {/* <Auth /> */}
  {/* <SendOrders /> */}
  <br />
  <h2> Lets order a pizza! </h2>
  <br />
  <Orders />
  <PizzaForm />
  </div>
  );
}

export default App;
