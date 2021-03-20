import React, { useState, useEffect } from 'react';
import { GetPokemon, GetAllPokemons } from '../../services/getPokemon';
import ListPoke from '../list/listPokemons';
import pokeball from '../../assests/png/pokeball.png';

import AutoSuggest from "react-autosuggest";
import { notification } from 'antd';

import 'antd/dist/antd.css';
import './styles.css';
import './suggest.css';


const SearthPokemons = () => {

    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const [pokemons, setPokemons] = useState([])
    const [poke, setPoke] = useState([])
    const [nomeTipoUm, setNomeTipoUm] = useState([])
    const [nomeTipoDois, setNomeTipoDois] = useState([])
    const [vida, setVida] = useState([])

    useEffect(() => {
        const dados = GetAllPokemons()
        dados.then((props) => {
            setPokemons(props['results'])
        })
    }, []);

    const openErrorNotification = type => {
        notification[type]({
            message: 'Erro na Consulta',
            description:
                'Campo vazio ou pokemon inexistente.',
        });
    };

    const limparInput = () => {
        setValue("")
        setNomeTipoUm([])
        setNomeTipoDois([])
        setVida([])
    }

    const pokemonHandle = (event) => {
        const dados = GetPokemon(value)
        dados.catch((error) => { openErrorNotification('error') })
        dados.then((props) => {
            limparInput()
            setPoke(props)
            setVida(props['stats'][0].base_stat)
            setNomeTipoUm(props['types'][0].type)
            setNomeTipoDois(props['types'][1].type)

        }).catch((error) => {

        })
    }

    const lowerCasedCompanies = pokemons.map(x => x.name.toLowerCase());

    function getSuggestions(value) {
        return lowerCasedCompanies.filter(language =>
            language.startsWith(value.trim().toLowerCase())
        );
    }


    return (
        <div className="searth">
            <form className="form" onSubmit={pokemonHandle}>
                <AutoSuggest
                    suggestions={suggestions}
                    onSuggestionsClearRequested={() => setSuggestions([])}
                    onSuggestionsFetchRequested={({ value }) => {
                        setValue(value);
                        setSuggestions(getSuggestions(value));
                    }}
                    onSuggestionSelected={(_, { suggestionValue }) => {
                        setValue(suggestionValue);
                        const data = GetPokemon(suggestionValue)
                        data.then((props) => {
                            limparInput()
                            setPoke(props)
                            setVida(props['stats'][0].base_stat)
                            setNomeTipoUm(props['types'][0].type)
                            setNomeTipoDois(props['types'][1].type)

                        }).catch((error) => {
                            // console.log(error)

                        })
                    }}
                    getSuggestionValue={suggestion => suggestion}
                    renderSuggestion={suggestion => <div>{suggestion}</div>}
                    inputProps={{
                        placeholder: "",
                        value: value,
                        onChange: (_, { newValue, method }) => {
                            setValue(newValue)
                        }

                    }}
                    highlightFirstSuggestion={true}
                    onClick={pokemonHandle}
                />

                <div className="button-submit" >
                    <img type="submit" src={pokeball} className="logo_loading" alt="pokebola"
                        onClick={pokemonHandle} />
                </div>
            </form>
            <ListPoke {...poke}
                nomeTipoUm={nomeTipoUm}
                nomeTipoDois={nomeTipoDois}
                vida={vida} />
        </div>
    )

}
export default SearthPokemons;