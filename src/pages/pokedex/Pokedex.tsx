import { Header } from '@/components/header/Header'
import { PokemonList } from '@/components/pokemonList/PokemonList'

export const Pokedex = () => {
    return (
        <>
            <Header />
            <h1 style={{ textAlign: 'center' }}>Pokedex</h1>
            <PokemonList />
        </>
    )
}
