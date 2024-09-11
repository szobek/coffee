import './coffeelist.scss'
export default function CoffeeList({ coffees, handleSelectCoffeeMethod }) {
  return (
    <div className="coffeelist-wrapper">

      <ul className='coffeelist'>
        {coffees.map(coffee => <li key={coffee.id} className='coffeelist-item'><button data-id={coffee.id} onClick={handleSelectCoffeeMethod}>{coffee.title}</button></li>)}
      </ul>
      <hr />
    </div>
  )
}