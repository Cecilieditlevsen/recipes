import type { Result } from 'neverthrow'
import { ResultAsync } from 'neverthrow'

import { datocmsClient } from '@/datocms/client'
import type { GetRecipeQuery } from '@/datocms/generated/graphql-types'
import { intoError } from '@/foundation/utils/into-error'

export async function getRecipe(
  slug: string,
): Promise<Result<GetRecipeQuery, Error>> {
  return ResultAsync.fromPromise(datocmsClient.GetRecipe({ slug }), (error) =>
    intoError(error, 'getRecipes ~ An unknown error occurred.'),
  )
}
