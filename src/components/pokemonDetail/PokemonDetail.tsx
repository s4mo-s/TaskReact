import { requestsApi } from '@/services/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonData } from '../pokemonList/interface/pokemon.interface'
import { Box, List, ListItem } from '@mui/material'

export const PokemonDetail = () => {
    const { name } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const [pokemon, setPokemon] = useState<PokemonData>()

    async function getPokemon() {
        const data: PokemonData = await requestsApi.get(url)
        setPokemon(data)
    }

    useEffect(() => {
        getPokemon()
    }, [])

    if (!pokemon) return null

    return (
        <Box sx={{ textAlign: 'center', textTransform: 'capitalize' }}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={`${pokemon.name}_img`} />
            <br />
            <span>
                <b>Height</b> : {pokemon.height} <b>Weight</b> : {pokemon.weight}
            </span>
            <h2>Stats</h2>
            {pokemon.stats.map((stat, index) => (
                <List key={index} sx={{ display: 'flex' }}>
                    <ListItem disablePadding sx={{ justifyContent: 'center' }}>
                        <b>{stat.stat.name}</b> : {stat.base_stat}
                    </ListItem>
                </List>
            ))}
            <h2>Abilities</h2>
            {pokemon.abilities.map((ability, index) => (
                <List key={index}>
                    <ListItem disablePadding sx={{ justifyContent: 'center' }}>
                        <b>{index}</b> : {ability.ability.name}
                    </ListItem>
                </List>
            ))}
        </Box>
    )
}
