import Link from 'next/link'

import { contentService } from '@/modules/content/content.service'
import {Recipe} from "@/components/recipe";


export default async function Home() {
  const allRecipesResult = await contentService.getRecipesMock()
  if (allRecipesResult.isErr()) {
    console.error(allRecipesResult.error)

    return <span>Error happened when fetching all recipes</span>
  }

  return (
    <div className={'container px-6'}>
      <h1>Recipes</h1>
      <ul className={'mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12 xl:gap-16 2xl:gap-20'}>
        {allRecipesResult.value.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/opskrifter/${recipe.slug}`}>
                <Recipe name={recipe.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

