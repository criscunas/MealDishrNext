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

  return (
    <AppBar position="static" color = "transparent" >
      <Container maxWidth="xl" className={headerStyles.header} >
        <Box className={headerStyles.header__nav} >
          <h1 className={headerStyles.header__title} > MealDishr </h1>
          <Box className = {headerStyles.header__combo} >
          <Autocomplete
            value={meal}
            disablePortal
            id="combo-box"
            sx={{bgcolor: "white", borderRadius: 2}}
            options={FoodData}
            onChange={(event, newValue) => {
              setMeal(newValue)
            }}
            renderInput={(params) => 
              <TextField {...params}
              label= "Search"
              variant="outlined"
              />
            }
          />
          <Button onClick={() => {btnHandle()}}  size = "small" variant="contained"> Submit </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
