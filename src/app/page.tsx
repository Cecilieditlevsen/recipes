import Link from 'next/link'

import { contentService } from '@/modules/content/content.service'


export default async function Home() {
  const allRecipesResult = await contentService.getRecipesMock()
  if (allRecipesResult.isErr()) {
    console.error(allRecipesResult.error)

    return <span>Error happened when fetching all recipes</span>
  }

  return (
    <div className={'container px-6'}>
      <h1>Recipes</h1>
      <ul className={'mt-8'}>
        {allRecipesResult.value.map((recipe) => (
          <li key={recipe.id}>
            <Link className={'underline'} href={`/opskrifter/${recipe.slug}`}>
                {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

