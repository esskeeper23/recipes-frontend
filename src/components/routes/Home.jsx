import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [recipes, setRecipes] = useState()

  useEffect(() => {

    const URL = 'https://magoo-recipes.onrender.com/api/v1/recipes'
    axios.get(URL)
      .then(res => setRecipes(res))
      .catch(err => console.log(err))
      console.log(recipes)
  }, [])
  

  return (
    <div>Home</div>
  )
}

export default Home