import { Link, ListItem } from '@mui/material'
import { PokemonData } from '../pokemonList/interface/pokemon.interface'

type Props = {
    pokemon: PokemonData
}

export const PokemonCard = ({ pokemon }: Props) => {
    return (
        <ListItem
            disablePadding
            sx={{
                textAlign: 'center',
                textTransform: 'capitalize',
                justifyContent: 'center',
                flexBasis: '10%',
            }}
        >
            <Link href={`/pokemon/${pokemon.name}`} underline="none">
                <img src={pokemon.sprites.front_default} alt={`${pokemon.name}_img`} />
                <br />
                <span>{pokemon.name}</span>
            </Link>
        </ListItem>
    )
}
