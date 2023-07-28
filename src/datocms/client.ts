import { GraphQLClient } from 'graphql-request'

import { getSdk } from './generated/graphql-types'

import { env } from '@/foundations/config/env/env'

const client = new GraphQLClient(env.client.NEXT_PUBLIC_DATOCMS_API_BASE, {
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
    authorization: `Bearer ${env.client.NEXT_PUBLIC_DATOCMS_ACCESS_TOKEN}`,
  },
})

export const datocmsClint = getSdk(client)
