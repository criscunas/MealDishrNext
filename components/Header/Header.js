import {AppBar, Container, Box, TextField, Button, InputAdornment} from "@material-ui/core";
import FoodData from '../../data.json';
import Autocomplete from "@mui/material/Autocomplete";
import headerStyles from './Header.module.scss';
import {useState} from 'react';
import {useRouter} from 'next/router';


export default function Header() {
  
  const [meal, setMeal] = useState(null)

  const router = useRouter ();

  const btnHandle = () => {
    router.push(`/${meal}`)
    setMeal(null)
  }

  const backHome = () => {
    router.push('/')
  }

  return (
    <AppBar position="static" style={{backgroundColor: "#1A5276"}} >
      <Container maxWidth="xl" className={headerStyles.header} >
        <Box className={headerStyles.header__nav} >
          <h1 onClick = {()=> {backHome()}} className={headerStyles.header__title} > MealDishr </h1>
          <div className={headerStyles.header__search} >
          <Autocomplete
            value={meal}
            disablePortal
            size="small"
            id="combo-box"
            sx={{bgcolor: "white", width: 200, borderRadius: 1}}
            options={FoodData}
            onChange={(event, newValue) => {
              setMeal(newValue)
            }}
            renderInput={(params) => 
              <TextField {...params}
              style = {{border: "none"}}
              variant="standard"
              placeholder="Select Meal"
              />
            }
          />
          {meal === null ? <Button className = {headerStyles.header__button} variant= "contained" size ="small" disabled > Submit </Button> : 
          <Button className = {headerStyles.header__button} size = "small" onClick={() => {btnHandle()}} variant="contained"> Submit </Button>}
          </div>
        </Box>
      </Container>
    </AppBar>
  );
}
