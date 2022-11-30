import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
    name: 'recipes',
    initialState: null,
    reducers: {
        setRecipes: (state, action) => action.payload
    }
})

export const { setRecipes } = recipeSlice.actions
export default recipeSlice.reducer