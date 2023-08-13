import { IRoute } from '@/router/routes/routePublic'
import { Pokemon } from '@/pages/pokemon/Pokemon'

export const routePokemon: IRoute[] = [{ path: '/pokemon/:name', element: Pokemon }]
