import {Table, TableContainer, TableCell, TableHead, TableRow, TableBody, Box} from "@material-ui/core";
import mainStyles from './Main.module.scss';

export default function Main (props) {
  
  const {meal, ingredients} = props;

  const ytube = meal.meals[0].strYoutube.replace("watch?v=", "embed/")

  return (
    <>
      <h1 className={mainStyles.main__title}> {meal.meals[0].strMeal} </h1>
      <div className={mainStyles.main}>
        <TableContainer className={mainStyles.main__table}>
          <Table
            style={{
              margin: "0 auto",
              border: "2px solid #1A5276"  
            }}
          >
            <TableHead>
              <TableRow style={{ backgroundColor: "#1A5276" }}>
                <TableCell style={{ color: "#fff" }} align="center">
                  <p className={mainStyles.main__table__name} >Ingredients</p> 
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ingredients.map((ing, i) => {
                return (
                  <TableRow key={ing.name}>
                    <TableCell align="left" style ={{display:"flex", gap: "0.5rem"}}> <p className={mainStyles.main__table__rows} > <span> {ing.amount}</span> {ing.name} </p> </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className={mainStyles.main__head}>
          <div className={mainStyles.main__video}>
            <iframe
              id="ytplayer"
              className={mainStyles.main__iframe}
              type="text/html"
              src={`${ytube}`}
            ></iframe>
          </div>

          <div className={mainStyles.main__instruction}>
            <h1 className={mainStyles.main__instruction__title}>
              Instructions
            </h1>
            {meal.meals[0].strInstructions.split("\\r\\n").map((ele, i) => {
              return (
                <p className={mainStyles.main__instruction__text}> {ele}</p>
              );
            })}
          </div>
        </Box>
      </div>
    </>
  );
} 