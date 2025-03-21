import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import './styles.css';
import './poker_styles.css';
import typeColors from '../types/pokemonTypes';
import typeImage from '../types/typeImages';

const ListPoke = (props) => {
    const { id, name, height, weight, nomeTipoUm, nomeTipoDois, vida } = props;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    // Estado para controlar se a imagem foi carregada
    const [isImageLoaded, setIsImageLoaded] = useState(false);

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
                {/* Camada do fundo com o GIF borrado */}
                <div
                    className="background-gif"
                    style={{
                        backgroundImage: `url(${typeImage[nomeTipoUm.name]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>
                {/* Spinner enquanto a imagem carrega */}
                {!isImageLoaded && <div className="spinner"></div>}
                {/* Imagem do Pokémon com fade-in */}
                <img
                    src={url}
                    alt={nome}
                    className={`pokemon-image ${isImageLoaded ? 'loaded' : ''}`}
                    onLoad={() => setIsImageLoaded(true)}
                    onError={(e) => {
                        e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                        setIsImageLoaded(true); // Mesmo em erro, considera como carregado para remover o spinner
                    }}
                />
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