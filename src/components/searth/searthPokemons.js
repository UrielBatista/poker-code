import React, { useState, useEffect } from 'react';
import { GetPokemon, GetAllPokemons } from '../../services/getPokemon';
import ListPoke from '../list/listPokemons';
import pokeball from '../../assests/png/pokeball.png';

import AutoSuggest from "react-autosuggest";
import { notification } from 'antd';

import 'antd/dist/antd.min.css';
import '../list/poker_styles.css';
import '../list/loading_poker.css';
import './styles.css';
import './suggest.css';


const SearthPokemons = () => {

    const [loading, setLoading] = useState(false)

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
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 4000)

        event.preventDefault();
        const dados = GetPokemon(primeiraLetraMinuscula(value))
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
    function primeiraLetraMinuscula(string) {
        var nomePokemon = string.charAt(0).toLowerCase() + string.slice(1);
        return nomePokemon;
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
                        setLoading(true)
                        setTimeout(() => {
                            setLoading(false);
                        }, 4000)

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
                        placeholder: "Searth pokemon",
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
            {loading ?

                <div className="loading_user" style={{ backgroundColor: '#1cabf2', boxShadow: 'none', marginTop: '-25px' }}>
                    <div className="centralizar_poker">
                        <div className="loading_poker">
                            <div className="loading_poker-button"></div>
                        </div>
                    </div>
                </div>
                :
                <ListPoke {...poke}
                    nomeTipoUm={nomeTipoUm}
                    nomeTipoDois={nomeTipoDois}
                    vida={vida} />
            }
        </div>
    )

}
export default SearthPokemons;