import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";
import styles from '../styles/Home.module.scss'
import Header from '../components/Header/Header';
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Data from '../data.json';

import {
  Container,
  Box,
  CssBaseline,
  Button
} from "@material-ui/core";

export default function Home() {

  const router = useRouter();

  const getRandomMeal = () => {
    let num = Math.floor(Math.random() * Data.length);
    let randomMeal = Data[num]
    router.push(`/${randomMeal}`)
  }

  const navigateGithub = () => {
    router.push("https://github.com/criscunas/MealDishrNext");
  }

  const navigateLinkedIn = () => {
    router.push("https://www.linkedin.com/in/cristophercunas/");
  }

  return (
    <div>
      <Head>
        <title>Meal Dishr</title>
        <meta name="description" content="Meal Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <CssBaseline/>
      <Container maxWidth = "xl">
        <Box style={{height: "90vh", textAlign: "center"}}>
          <h1 className={styles.home__header} > Welcome to MealDishr </h1>
            <p className={styles.home__description} > Select a meal above to get started or click below for a random meal ! </p>
            <Button onClick = {() => {getRandomMeal()}} endIcon = {<ShuffleIcon/>} style = {{backgroundColor: "#1A5276", color:"#fff"}} variant='contained' size ="medium"> Random </Button>
            <p className={styles.home__caption} >Built using <Link href = "https://www.themealdb.com/api.php"> The Meal DB </Link> </p>
            <div className = {styles.home__icons}>
              <p onClick = {()=> {navigateGithub()}} > <GitHubIcon htmlColor='#1A5276' fontSize='large' /> </p>
              <p onClick={()=>{navigateLinkedIn()}} > <LinkedInIcon htmlColor='#1A5276' fontSize='large' /> </p>
            </div>
        </Box>
      </Container>
    </div>
  )
}
