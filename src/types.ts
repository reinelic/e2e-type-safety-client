import type { GetUSersQuery } from './graphql/generated'

export type Message = GetUSersQuery['users'][0]['messages'][0]
export type User = GetUSersQuery['users'][0]
