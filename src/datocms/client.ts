import { env } from '@/foundations/config/env/client.env'
import { GraphQLClient } from 'graphql-request'

import { getSdk } from './generated/graphql-types'

const client = new GraphQLClient(env.client.NEXT_PUBLIC_DATOCMS_API_BASE, {
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
    authorization: `Bearer ${env.client.NEXT_PUBLIC_DATOCMS_ACCESS_TOKEN}`,
  },
})

export const datocmsClint = getSdk(client)
