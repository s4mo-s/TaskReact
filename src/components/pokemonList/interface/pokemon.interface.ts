export interface PokemonListData {
    next: string
    results: PokemonData[]
}

export interface PokemonData {
    id: number
    name: string
    height: number
    weight: number
    stats: PokemonStats[]
    abilities: PokemonAbility[]
    sprites: SpriteInterface
}

interface PokemonStats {
    base_stat: number
    stat: Stat
}

interface Stat {
    name: StatName
    url: string
}

type StatName = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed'

interface PokemonAbility {
    ability: Ability
    is_hidden: boolean
    slot: number
}

interface Ability {
    name: string
    url: string
}

interface SpriteInterface {
    front_default: string | undefined
    back_default: string | undefined
}
