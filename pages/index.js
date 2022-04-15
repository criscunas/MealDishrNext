import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

const getIngredients = (data) => {
    let iList = [];

    let ingredients = [];
    let measures = [];

    Object.keys(data)
      .map((key) => data[key])
      .slice(9, 29)
      .forEach((item, index) => {
        if (item) {
          ingredients.push(item);
          measures.push(
            Object.keys(data)
              .map((key) => data[key])
              .slice(29, 49)[index]
          );
        }
      });

    ingredients.forEach((item, i) => {
      iList.push({ name: ingredients[i], amount: measures[i] });
    });

    return iList;
  };

export async function getStaticProps() {
  
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Apple%20Frangipan%20Tart");

  const Meal = await res.json()
  
  const ingredients = getIngredients(Meal.meals[0])

  const firstMeal = Meal.meals[0]

  return {
    props: {
      firstMeal,
      ingredients
    },
  }
}

export default function Home({firstMeal, ingredients}) {

  return (
    <div>
      <Head>
        <title>Meal Dishr</title>
        <meta name="description" content="Meal Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main meal = {firstMeal} ingredients = {ingredients} />
    </div>
  )
}
