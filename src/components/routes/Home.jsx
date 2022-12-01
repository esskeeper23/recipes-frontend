import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HomeRecipes from '../home/HomeRecipes'

const Home = () => {
  const [recipes, setRecipes] = useState()

  useEffect(() => {

    const URL = 'https://magoo-recipes.onrender.com/api/v1/recipes'

    axios.get(URL)
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(recipes)
  

  return (
    <div>
      <div className='card-recipes-container'>
        {
          recipes?.map(recipe => (
            <HomeRecipes 
            key={recipe.id}
            recipe={recipe}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home