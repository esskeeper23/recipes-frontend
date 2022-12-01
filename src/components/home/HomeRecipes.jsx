import React from 'react'

const HomeRecipes = ({recipe}) => {

  return (
    <div>
        <h1>{recipe.title}</h1>
        <img style={{width: '100px'}} src={recipe.urlImg} alt="food-image" />
        <h3>Time to cock: {recipe.time}</h3>
        <h3>Portions: {recipe.portions}</h3>
    </div>
  )
}

export default HomeRecipes