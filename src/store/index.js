import { configureStore } from "@reduxjs/toolkit"
import recipes from "./slices/recipes.slice"

export default configureStore ({
    reducer: {
        recipes
    },
})