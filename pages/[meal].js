import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Head from 'next/head';
import FoodData from '../data.json';
import { useRouter } from 'next/router';


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

// const getAll = async () => {
//   let data = FoodData;
//   const allMeals = data.map(async (meal) => {
//     const res = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
//     );
//     return res.json();
//   });
//   return await Promise.all(allMeals)
// }

// export async function getStaticPaths () {
//   const all = await getAll()

//   const paths = all.map((ele) => {
//     return {
//       params: {meal: ele.meals[0].strMeal}
//     }
//   })

//   return {
//     paths,
//     fallback:false
//   }
// }

export const getServerSideProps = async (context) => {
  const mealName = context.params.meal;
  
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  );

  const data = await res.json()

  const ingredients = getIngredients(data.meals[0]);

  return {
    props: {
      data, 
      ingredients
    },
  }
}

export default function Meal ({data, ingredients}) {
  
  return (
    <>
      <Head>
        <title> {data.meals[0].strMeal} </title>
      </Head>
      <Header />
      <Main meal={data} ingredients={ingredients} />
    </>
  );
} 