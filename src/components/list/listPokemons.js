import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.min.css';
import './styles.css';
import './poker_styles.css';
import typeColors from '../types/pokemonTypes';
import typeImage from '../types/typeImages';

const ListPoke = (props) => {
    const { id, name, height, weight, nomeTipoUm, nomeTipoDois, vida, abilityId } = props;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchDescription = async () => {
            // Primeira tentativa: buscar a descrição da habilidade
            try {
                const abilityUrl = `https://pokeapi.co/api/v2/ability/${abilityId || id}`;
                const response = await fetch(abilityUrl);
                if (!response.ok) throw new Error('Erro na requisição da habilidade');
                const data = await response.json();
                const effectEntry = data.effect_entries[0];
                setDescription(effectEntry ? effectEntry.effect : 'No ability effect available.');
            } catch (error) {
                console.error('Erro ao buscar descrição da habilidade:', error);
                // Fallback: buscar a descrição da espécie do Pokémon
                try {
                    const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
                    const speciesResponse = await fetch(speciesUrl);
                    if (!speciesResponse.ok) throw new Error('Erro na requisição da espécie');
                    const speciesData = await speciesResponse.json();
                    const englishEntry = speciesData.flavor_text_entries.find(
                        (entry) => entry.language.name === 'en'
                    );
                    setDescription(englishEntry ? englishEntry.flavor_text : 'No description available.');
                } catch (speciesError) {
                    console.error('Erro ao buscar descrição da espécie:', speciesError);
                    setDescription('Failed to load description.');
                }
            }
        };

        if (id) {
            fetchDescription();
        }
    }, [id, abilityId]);

    if (!typeImage[nomeTipoUm.name] || !id) {
        return (
            <div className="user_poker" style={{ backgroundColor: '#1cabf2', boxShadow: 'none', marginTop: '-25px' }}>
                <div className="center-poker">
                    <div className="pokebola">
                        <div className="pokebola-botao"></div>
                    </div>
                </div>
            </div>
        );
    }

    let tamanho = height < 10 ? `0.${height}` : height / 10;
    let peso = weight / 10;
    let nome = name[0].toUpperCase() + name.slice(1);

    const renderCard = () => (
        <div className="pokemon-card" style={{ borderColor: typeColors[nomeTipoUm.name] }}>
            <div className="card-header">
                <span className="pokemon-name">{nome}</span>
                <span className="pokemon-hp">{vida} HP</span>
            </div>
            <div className="image-section">
                <div
                    className="background-gif"
                    style={{
                        backgroundImage: `url(${typeImage[nomeTipoUm.name]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>
                {!isImageLoaded && <div className="spinner"></div>}
                <img
                    src={url}
                    alt={nome}
                    className={`pokemon-image ${isImageLoaded ? 'loaded' : ''}`}
                    onLoad={() => setIsImageLoaded(true)}
                    onError={(e) => {
                        e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                        setIsImageLoaded(true);
                    }}
                />
            </div>
            <div className="description-section">
                <p className="pokemon-description">{description}</p>
            </div>
            <div className="info-section">
                <div className="type-section">
                    <span
                        className="type-badge"
                        style={{ backgroundColor: typeColors[nomeTipoUm.name] }}
                    >
                        {nomeTipoUm.name}
                    </span>
                    {nomeTipoDois.name && (
                        <span
                            className="type-badge"
                            style={{ backgroundColor: typeColors[nomeTipoDois.name] }}
                        >
                            {nomeTipoDois.name}
                        </span>
                    )}
                </div>
                <div className="stats-section">
                    <div className="stat-item">
                        <span className="stat-label">Height</span>
                        <span className="stat-value">{tamanho} m</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Weight</span>
                        <span className="stat-value">{peso} kg</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return renderCard();
};

export default ListPoke;