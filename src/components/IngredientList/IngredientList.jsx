export default function IngredientList({ingredients}){
    return (<>
    {ingredients.map((ingredient,index)=><li key={index}>{ingredient}</li>)}
    </>)
}