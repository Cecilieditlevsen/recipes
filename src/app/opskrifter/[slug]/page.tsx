import Image from 'next/image'
import { notFound } from 'next/navigation'

import { contentService } from '@/modules/content/content.service'

type RecipePageProps = {
  params: {
    slug: string
  }
}

export default async function RecipePage({ params }: RecipePageProps) {
  const recipeResult = await contentService.getRecipe(params.slug)

  if (recipeResult.isErr()) {
    return notFound()
  }

  const recipe = recipeResult.value.recipe

  return (
    <div className={'container'}>
      <h1>{recipe?.title}</h1>
      <p>{recipe?.excerpt}</p>

      {recipe?.featuredImage?.responsiveImage ? (
        <Image
          alt={''}
          src={recipe.featuredImage.responsiveImage.src}
          width={recipe.featuredImage.responsiveImage.width}
          height={recipe.featuredImage.responsiveImage.height}
          placeholder={'blur'}
          blurDataURL={recipe.featuredImage.responsiveImage.base64 ?? ''}
        />
      ) : null}
    </div>
  )
}
