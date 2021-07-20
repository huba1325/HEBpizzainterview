import local_pizza from './images/local_pizza.svg';
import './App.css';
import { Banner } from 'material-ui-banner';
import { Avatar } from '@material-ui/core';
import { NameForm } from './components/Form';
import { Orders } from './components/GetOrders2';

function App() {
  return (
    <div className="App"> 
    <Banner
    icon={<Avatar alt="pizza icon" src={local_pizza} />}
    label ="HEB's Pizza App"
    showDismissButton = {false}
    open
  />
  <br />
  <h2> Lets order a pizza! </h2>
  <Orders />
  <NameForm />
  </div>
  );
}

export default App;
