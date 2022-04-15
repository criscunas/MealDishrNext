

export default function Main (props) {
  
  const {meal, ingredients} = props;

  return ( 
    <>
      <header>
        <h1> {meal.strMeal} </h1>
      </header>

      <div> 
        <h1>Ingredients</h1>
        <ul>
          {ingredients.map((ing, i) => {
            return (
            <li key = {i}>
              <span> {ing.name} </span>
              <span> {ing.amount} </span>
            </li>
          )
          })}
        </ul>
      </div>
    </>
  )
} 