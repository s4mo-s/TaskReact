import { PokemonData, PokemonListData } from './interface/pokemon.interface'
import { requestsApi } from '@/services/api'
import { Box, Button, List } from '@mui/material'
import { useEffect, useState } from 'react'
import { PokemonCard } from '../pokemonCard/PokemonCard'

export const PokemonList = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [allPokemons, setAllPokemons] = useState<PokemonData[]>([])

    async function getAllPokemons() {
        const data: PokemonListData = await requestsApi.get(url)
        setUrl(data.next)

        data.results.forEach(async (pokemon: PokemonData) => {
            const result: PokemonData = await requestsApi.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            setAllPokemons((currentState) => [...currentState, result])
        })
    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    return (
        <Box sx={{ textAlign: 'center' }}>
            <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {allPokemons.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </List>
            <Button sx={{ marginTop: '30px' }} variant="contained" onClick={getAllPokemons}>
                More 20
            </Button>
        </Box>
    )
}
