import React from 'react';

import 'antd/dist/antd.css';
import './styles.css';
import './poker_styles.css';
import "react-step-progress-bar/styles.css";

import { ProgressBar, Step } from "react-step-progress-bar";
import typeColors from '../types/pokemonTypes';
import typeImage from '../types/typeImages';


const ListPoke = (props) => {
    const { id, name, height, weight, nomeTipoUm, nomeTipoDois, vida } = props;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    if (!typeImage[nomeTipoUm.name]) {
        return (
            <div className="user_poker" style={{ backgroundColor: '#1cabf2', boxShadow: 'none', marginTop: '-25px' }}>
                <div className="center-poker">
                    <div className="pokebola">
                        <div className="pokebola-botao"></div>
                    </div>
                </div>
            </div>
        )
    }

    let tamanho = height;
    let peso = weight / 10;
    let nome = name[0].toUpperCase() + name.slice(1);

    if (tamanho < 10) {
        tamanho = '0.' + tamanho
    }
    if (tamanho >= 10) {
        tamanho = tamanho / 10
    }
    // calculando tamanho percentual
    var tamanhoPercent = tamanho * 10


    // Card com dois tipos
    if (nomeTipoDois.name) {
        return (
            <>
                <input type="checkbox" id="switch" />

                <label className="flip-container" for="switch" >
                    <div className="flipper">
                        <div className="front">
                            <div className="front-component" style={{
                                width: '110%',
                                height: '110%',
                                background: `url(${typeImage[nomeTipoUm.name]}) center`,
                                borderRadius: '20px',
                                borderStyle: 'solid',
                                borderColor: typeColors[nomeTipoUm.name],
                                borderWidth: '10px'
                            }}>
                                <div className="round-image" style={{
                                    backgroundColor: typeColors[nomeTipoUm.name],
                                }}><img src={url} /></div>
                                <button type="button" name="button" className="btn name_btn" style={{
                                    backgroundColor: '#e4e4e4',
                                    marginBottom: '15px',
                                    marginTop: '5px',
                                    width: '90%',
                                    borderRadius: '10px',
                                    border: 'solid',
                                    borderColor: typeColors[nomeTipoUm.name],
                                    padding: '0.3rem'
                                }}>{<strong>{nome}</strong>}</button>
                            </div>
                        </div>
                        <div class="back">
                            <div style={{
                                width: '110%',
                                height: '110%',
                                backgroundColor: '#282828',
                                borderRadius: '20px',
                                borderStyle: 'solid',
                                borderColor: typeColors[nomeTipoUm.name],
                                borderWidth: '10px'
                            }}>
                                <div className="progress-bar">
                                    <ProgressBar
                                        width="190px"
                                        percent={vida}
                                        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"

                                    >
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                                                    width="30"
                                                    src="https://static.wikia.nocookie.net/pkmnshuffle/images/7/7d/No_Hearts_Needed.png"
                                                />

                                            )}
                                        </Step>
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 150}%)` }}
                                                    width="30"
                                                    src="https://static.wikia.nocookie.net/pkmnshuffle/images/1/1c/Heart_Recovery.png"
                                                />
                                            )}
                                        </Step>
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 200}%)` }}
                                                    width="30"
                                                    src="https://static.wikia.nocookie.net/pkmnshuffle/images/d/d2/Superior_Super_Catch_Time.png"
                                                />
                                            )}
                                        </Step>

                                    </ProgressBar>
                                    <div style={{
                                        fontSize: '13px',
                                        marginTop: '-15px',
                                        marginLeft: '210px',
                                        color: 'white'
                                    }}>
                                        <strong>{vida} Hp</strong>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <ProgressBar
                                        percent={peso}
                                        width="190px"
                                        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"

                                    >
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                                                    width="30"
                                                    src="https://cdn-icons-png.flaticon.com/512/188/188950.png"
                                                />
                                            )}
                                        </Step>
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 150}%)` }}
                                                    width="30"
                                                    src="https://cdn-icons-png.flaticon.com/512/188/188969.png"
                                                />
                                            )}
                                        </Step>
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 200}%)` }}
                                                    width="30"
                                                    src="https://cdn-icons-png.flaticon.com/512/188/188951.png"
                                                />
                                            )}
                                        </Step>
                                    </ProgressBar>
                                    <div style={{
                                        fontSize: '13px',
                                        marginTop: '-15px',
                                        marginLeft: '210px',
                                        color: 'white'
                                    }}>
                                        <strong>{peso} Kg</strong>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <ProgressBar
                                        percent={tamanhoPercent}
                                        width="190px"
                                        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"

                                    >
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 10}%)` }}
                                                    width="30"
                                                    src="https://cdn-icons-png.flaticon.com/512/188/188919.png"
                                                />
                                            )}
                                        </Step>
                                    </ProgressBar>
                                    <div style={{
                                        fontSize: '13px',
                                        marginTop: '-15px',
                                        marginLeft: '210px',
                                        color: 'white'
                                    }}>
                                        <strong>{tamanho} M</strong>
                                    </div>
                                </div>
                                <div>
                                    <button type="button" name="button" style={{
                                        backgroundColor: typeColors[nomeTipoUm.name],
                                        borderRadius: '10px',
                                        padding: '0.1rem',
                                        border: 'none'
                                    }}>{nomeTipoUm.name}</button>
                                    <button type="button" name="button" style={{
                                        backgroundColor: typeColors[nomeTipoDois.name],
                                        borderRadius: '10px',
                                        padding: '0.1rem',
                                        marginLeft: '8px',
                                        border: 'none'

                                    }}>{nomeTipoDois.name}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </label>
            </>
        )
    }

    // Card com apenas um tipo
    return (

        <>
            <input type="checkbox" id="switch" />

            <label className="flip-container" for="switch" >
                <div className="flipper">
                    <div className="front">
                        <div className="front-component" style={{
                            width: '110%',
                            height: '125%',
                            background: `url(${typeImage[nomeTipoUm.name]}) center`,
                            borderRadius: '20px',
                            borderStyle: 'solid',
                            borderColor: typeColors[nomeTipoUm.name],
                            borderWidth: '10px'
                        }}>
                            <div className="round-image" style={{
                                backgroundColor: typeColors[nomeTipoUm.name],
                            }}><img src={url} /></div>
                            <button type="button" name="button" className="btn name_btn" style={{
                                backgroundColor: '#e4e4e4',
                                marginBottom: '15px',
                                marginTop: '5px',
                                width: '90%',
                                borderRadius: '10px',
                                border: 'solid',
                                borderColor: typeColors[nomeTipoUm.name],
                                padding: '0.3rem'
                            }}>{<strong>{nome}</strong>}</button>
                        </div>
                    </div>
                    <div class="back">
                        <div style={{
                            width: '110%',
                            height: '110%',
                            backgroundColor: '#282828',
                            borderRadius: '20px',
                            borderStyle: 'solid',
                            borderColor: typeColors[nomeTipoUm.name],
                            borderWidth: '10px'
                        }}>
                            <div className="progress-bar">
                                    <ProgressBar
                                        percent={vida}
                                        width="190px"
                                        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"

                                    >
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                                                    width="30"
                                                    src="https://static.wikia.nocookie.net/pkmnshuffle/images/7/7d/No_Hearts_Needed.png"
                                                />

                                            )}
                                        </Step>
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 150}%)` }}
                                                    width="30"
                                                    src="https://static.wikia.nocookie.net/pkmnshuffle/images/1/1c/Heart_Recovery.png"
                                                />
                                            )}
                                        </Step>
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 200}%)` }}
                                                    width="30"
                                                    src="https://static.wikia.nocookie.net/pkmnshuffle/images/d/d2/Superior_Super_Catch_Time.png"
                                                />
                                            )}
                                        </Step>

                                    </ProgressBar>
                                    <div style={{
                                        fontSize: '13px',
                                        marginTop: '-15px',
                                        marginLeft: '210px',
                                        color: 'white'
                                    }}>
                                        <strong>{vida} Hp</strong>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <ProgressBar
                                        percent={peso}
                                        width="190px"
                                        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"

                                    >
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                                                    width="30"
                                                    src="https://cdn-icons-png.flaticon.com/512/188/188950.png"
                                                />
                                            )}
                                        </Step>
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 150}%)` }}
                                                    width="30"
                                                    src="https://cdn-icons-png.flaticon.com/512/188/188969.png"
                                                />
                                            )}
                                        </Step>
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 200}%)` }}
                                                    width="30"
                                                    src="https://cdn-icons-png.flaticon.com/512/188/188951.png"
                                                />
                                            )}
                                        </Step>
                                    </ProgressBar>
                                    <div style={{
                                        fontSize: '13px',
                                        marginTop: '-15px',
                                        marginLeft: '210px',
                                        color: 'white'
                                    }}>
                                        <strong>{peso} Kg</strong>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <ProgressBar
                                        percent={tamanhoPercent}
                                        width="190px"
                                        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"

                                    >
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 10}%)` }}
                                                    width="30"
                                                    src="https://cdn-icons-png.flaticon.com/512/188/188919.png"
                                                />
                                            )}
                                        </Step>
                                    </ProgressBar>
                                    <div style={{
                                        fontSize: '13px',
                                        marginTop: '-15px',
                                        marginLeft: '210px',
                                        color: 'white'
                                    }}>
                                        <strong>{tamanho} M</strong>
                                    </div>
                                </div>
                            <div>
                                <button type="button" name="button" style={{
                                    backgroundColor: typeColors[nomeTipoUm.name],
                                    borderRadius: '10px',
                                    padding: '0.1rem',
                                    border: 'none'
                                }}>{nomeTipoUm.name}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </label>
        </>
    )
}
export default ListPoke;


