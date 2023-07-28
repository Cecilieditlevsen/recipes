import type { Result } from 'neverthrow'
import { ResultAsync } from 'neverthrow'

import { datocmsClient } from '@/datocms/client'
import type { GetAllRecipesQuery } from '@/datocms/generated/graphql-types'
import { intoError } from '@/foundation/utils/into-error'

export async function getRecipes(): Promise<Result<GetAllRecipesQuery, Error>> {
  return ResultAsync.fromPromise(datocmsClient.GetAllRecipes(), (error) =>
    intoError(error, 'getRecipes ~ An unknown error occurred.'),
  )
}
