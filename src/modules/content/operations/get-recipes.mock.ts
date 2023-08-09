import {ok, Result} from "neverthrow";

const createRecipe = (recipe: Recipe) => {
    return recipe
}

export const listOfWithIndex = <T>(
    length = 10,
    generator: (index: number) => T
) => {
    return Array.from({ length }, (_, index) => generator(index))
}


type Recipe = {
    id: number
    title: string
    slug: string

}



export async function getRecipesMock():Promise<Result<Recipe[], Error>>{
    return ok(
        listOfWithIndex(10, (i) => createRecipe({id: i, title: 'recipe ' + i, slug: 'recipe-' + i}))
    )
}
