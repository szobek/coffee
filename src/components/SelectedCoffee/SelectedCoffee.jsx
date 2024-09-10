import IngredientList from '../IngredientList/IngredientList'
import './SelectedCoffee.css'
export default function SelectedCoffee({ coffee }) {
    return (
        <div className='selected-coffee-wrapper'>
            <h2>{coffee.title}</h2>
            <p className='selected-coffee-img-container'>
                <img className="selected-coffee-img" src={coffee.image} alt="Coffee image" />
            </p>
            <div className="selected-coffee-description-container">

                <p>{coffee.description}</p>
            </div>
            <hr />
            <p>Inredients</p>
            <div className="ingredient-list-container">
                <IngredientList ingredients={coffee.ingredients} />
            </div>
        </div>)
}