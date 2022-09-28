import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pokemonCards.css'
const PokemonCards = ({ url }) => {

    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])

    const [cardColors, setCardColors] = useState({
        normal: "linear-gradient(180deg, rgba(80,45,57,1) 4%, rgba(143,79,101,1) 54%, rgba(148,104,119,1) 86%)",
        fighting: "linear-gradient(180deg, rgba(103,14,1,1) 0%, rgba(107,35,0,1) 28%, rgba(201,61,0,1) 86%)",
        flying: "linear-gradient(180deg, rgba(205,196,61,1) 4%, rgba(240,245,118,1) 54%, rgba(244,255,183,1) 100%)",
        poison: "linear-gradient(180deg, rgba(77,45,80,1) 4%, rgba(137,79,143,1) 54%, rgba(143,104,148,1) 86%)",
        ground: "linear-gradient(180deg, rgba(128,81,0,1) 4%, rgba(159,101,0,1) 54%, rgba(162,129,73,1) 100%)",
        rock: "linear-gradient(180deg, rgba(116,116,116,1) 4%, rgba(163,163,163,1) 54%, rgba(218,216,216,1) 100%)",
        bug: "linear-gradient(180deg, rgba(32,156,0,1) 4%, rgba(63,190,40,1) 54%, rgba(138,193,123,1) 86%)",
        ghost: "linear-gradient(180deg, rgba(45,54,80,1) 4%, rgba(79,94,143,1) 54%, rgba(78,81,152,1) 86%)",
        steel: "linear-gradient(180deg, rgba(83,113,97,1) 4%, rgba(106,145,124,1) 54%, rgba(142,196,167,1) 100%)",
        fire: "linear-gradient(0deg, #FAD961 0%, #F76B1C 100%)",
        water: "linear-gradient(180deg, rgba(1,51,103,1) 0%, rgba(0,36,107,1) 16%, rgba(0,51,201,1) 86%)",
        grass: "linear-gradient(180deg, rgba(126,185,178,1) 4%, rgba(236,242,182,1) 54%, rgba(208,255,195,1) 86%)",
        electric: "linear-gradient(180deg, rgba(0,10,84,1) 4%, rgba(0,1,218,1) 54%, rgba(65,65,255,1) 100%)",
        psychic: "linear-gradient(180deg, rgba(255,37,37,1) 4%, rgba(254,66,66,1) 54%, rgba(255,109,109,1) 100%)",
        ice: "linear-gradient(0deg, #0093E9 0%, #80D0C7 100%)",
        dragon: "linear-gradient(180deg, rgba(73,119,120,1) 4%, rgba(94,157,149,1) 54%, rgba(119,195,185,1) 100%)",
        dark: "black",
        fairy: "linear-gradient(180deg, rgba(255,37,74,1) 4%, rgba(254,66,92,1) 54%, rgba(255,109,127,1) 100%)",
        unkown: "",
        shadow: "linear-gradient(180deg, rgba(52,52,52,1) 4%, rgba(92,92,92,1) 54%, rgba(126,125,125,1) 100%)",
    })

    const [Colors, setColors] = useState({
        normal: "#8f4f65",
        fighting: "#6b2300",
        flying: "#f0f576",
        poison: "#4d2d50",
        ground: "#9f6500",
        rock: "#a3a3a3",
        bug: "#3fbe28",
        ghost: "#4f5e8f",
        steel: "#6a917c",
        fire: "#F76B1C",
        water: "#00246b",
        grass: "#7eb9b2",
        electric: "#0001da",
        psychic: "#fe4242",
        ice: "#80D0C7",
        dragon: "#5e9d95",
        dark: "black",
        fairy: "#fe425c",
        unkown: "",
        shadow: "#5c5c5c",
    })


    return (
        <div onClick={() => navigate(`/PokeDetails/${pokemon.id}`)} className='pokeWrapper' style={{ background: `${cardColors[pokemon.types?.[0].type.name]}`, border: `8px solid ${Colors[pokemon.types?.[0].type.name]}` }}>
            <img src={pokemon.sprites?.other.home.front_default} alt="Pokemon" />
            <div className='pokemonCard'>
                <div className='pokeInfo'>
                    <li className='pokeName' style={{ color: `${Colors[pokemon.types?.[0].type.name]}` }}>{pokemon.name}</li>
                    <li className='pokeType'>{pokemon.types?.length == 2 ? `${pokemon.types?.[0].type.name} / ${pokemon.types?.[1].type.name}` : pokemon.types?.[0].type.name}</li>
                    <li className='pokeTypeText'><small>Type</small></li>
                </div>
                <div className="pokeStats">
                    <li> HP <br /><span style={{ color: `${Colors[pokemon.types?.[0].type.name]}` }}>{pokemon.stats?.[0].base_stat}</span> </li>
                    <li> Attack <br /><span style={{ color: `${Colors[pokemon.types?.[0].type.name]}` }}>{pokemon.stats?.[1].base_stat}</span> </li>
                    <li> Defense <br /><span style={{ color: `${Colors[pokemon.types?.[0].type.name]}` }}>{pokemon.stats?.[2].base_stat}</span> </li>
                    <li> Speed <br /><span style={{ color: `${Colors[pokemon.types?.[0].type.name]}` }}>{pokemon.stats?.[5].base_stat}</span> </li>
                </div>
            </div>
        </div>
    );
};

export default PokemonCards;