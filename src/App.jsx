import { useState } from 'react';

import { COFFEES } from './data.js';
import CoffeeList from './components/coffeelist/CoffeeList.jsx';
import SelectedCoffee from './components/SelectedCoffee/SelectedCoffee.jsx';

function App() {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  function handleSelectCoffee(e) {
    const id = Number(e.target.dataset.id)
    const coffee = COFFEES.filter(coffee => coffee.id === id)
    setSelectedCoffee(coffee[0])



  }
  return (<>
    <div className="coffee-list-container">
      <CoffeeList handleSelectCoffeeMethod={handleSelectCoffee} coffees={COFFEES} />
    </div>
    {(selectedCoffee != null) ? <SelectedCoffee coffee={selectedCoffee} /> : ''}

  </>);
}

export default App;
