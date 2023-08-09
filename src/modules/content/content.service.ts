import { getRecipe } from '@/modules/content/operations/get-recipe'
import { getRecipes } from '@/modules/content/operations/get-recipes'
import {getRecipesMock} from "@/modules/content/operations/get-recipes.mock";

export const contentService = {
  getRecipes,
  getRecipe,
  getRecipesMock,
}
