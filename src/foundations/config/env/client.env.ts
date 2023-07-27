import { z } from 'zod'

const clientEnvSchema = z.object({
  NEXT_PUBLIC_DATOCMS_ACCESS_TOKEN: z.string(),
  NEXT_PUBLIC_DATOCMS_API_BASE: z.string(),
})

const clientEnv = {
  NEXT_PUBLIC_DATOCMS_ACCESS_TOKEN: process.env.NEXT_PUBLIC_DATOCMS_ACCESS_TOKEN,
  NEXT_PUBLIC_DATOCMS_API_BASE: process.env.NEXT_PUBLIC_DATOCMS_API_BASE,
}

export const env = {
  client: clientEnvSchema.parse(clientEnv),
}
