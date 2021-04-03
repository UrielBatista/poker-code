import React from 'react';
import { Card } from 'antd';

import 'antd/dist/antd.css';
import './styles.css';

import typeColors from '../types/pokemonTypes';

const { Meta } = Card;

const ListPoke = (props) => {
    const { id, name, height, weight, nomeTipoUm, nomeTipoDois, vida } = props;


    if (!id) {
        return (
            <div></div>
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

    // Card com dois tipos
    if (nomeTipoDois.name) {
        return (
            <div className="card">
                <form className="form">
                    <Card
                        hoverable
                        style={{
                            width: '100%',
                            marginTop: '10px',
                            backgroundColor: '#FFF',
                            borderRadius: '20px',
                            borderStyle: 'solid',
                            borderColor: typeColors[nomeTipoUm.name],
                            borderWidth: '10px'
                        }}
                        cover={<img alt="img-pokemon" className="image-api"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />}
                    >
                        <Meta style={{
                            marginLeft: '5%',
                            backgroundColor: '#e4e4e4',
                            width: '90%',
                            borderRadius: '10px',
                            color: typeColors[nomeTipoUm.name],
                            border: 'solid',
                            borderColor: typeColors[nomeTipoUm.name],
                            padding: '0.3rem'
                        }} title={<strong>{nome}</strong>} />
                        <div className="height-div"
                            style={{
                                textAlign: 'left',
                                marginLeft: '2px',
                                marginTop: '20px'
                            }}>
                            <div className="circle-hp">
                                <strong style={{ boxShadow: `0px 2px 15px 0px ${typeColors[nomeTipoUm.name]}` }} className="card-hp">{vida+ 'hp'}</strong>
                            </div>
                            <div className="circle-peso">
                                <strong style={{ boxShadow: `0px 2px 15px 0px ${typeColors[nomeTipoUm.name]}` }} className="card-peso"> {peso + 'kg'}</strong>
                            </div>
                            <div className="circle-tamanho">
                                <strong style={{ boxShadow: `0px 2px 15px 0px ${typeColors[nomeTipoUm.name]}` }} className="card-tamanho"> {tamanho + 'm'}</strong>
                            </div>
                        </div>
                        <div className="origem-main" style={{ textAlign: 'center' }}>
                            <h5>
                                <label style={{
                                    backgroundColor: typeColors[nomeTipoUm.name],
                                    borderRadius: '10px',
                                    padding: '0.5rem'
                                }}>
                                    {nomeTipoUm.name}
                                </label>
                                <label style={{
                                    backgroundColor: typeColors[nomeTipoDois.name],
                                    borderRadius: '10px',
                                    padding: '0.5rem',
                                    marginLeft: '5px'
                                }}>
                                    {nomeTipoDois.name}
                                </label>
                            </h5>
                            <br />
                        </div>
                    </Card>
                </form>
            </div>
        )
    }

    // Card com apenas um tipo
    return (
        <div className="card-main">
            <form className="form">
                <Card
                    className="card-pokemon"
                    hoverable
                    style={{
                        width: '100%',
                        marginTop: '10px',
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        borderStyle: 'solid',
                        borderColor: typeColors[nomeTipoUm.name],
                        borderWidth: '10px'
                    }}
                    cover={<img alt="img-pokemon" className="image-api" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />}
                >
                    <Meta style={{
                        marginLeft: '5%',
                        backgroundColor: '#e4e4e4',
                        width: '90%',
                        borderRadius: '10px',
                        color: typeColors[nomeTipoUm.name],
                        border: 'solid',
                        borderColor: typeColors[nomeTipoUm.name],
                        padding: '0.3rem'
                    }} title={<strong>{nome}</strong>} />


                    <div className="height-div" style={{
                        textAlign: 'left', marginLeft: '2px', marginTop: '20px',
                        borderColor: 'black', borderRadius: '20px'
                    }}>
                        <div className="circle-hp">
                            <strong style={{ boxShadow: `0px 2px 15px 0px ${typeColors[nomeTipoUm.name]}` }} className="card-hp">{vida + ' hp'}</strong>
                        </div>
                        <div className="circle-peso">
                            <strong style={{ boxShadow: `0px 2px 15px 0px ${typeColors[nomeTipoUm.name]}` }} className="card-peso"> {peso + ' kg'}</strong>
                        </div>
                        <div className="circle-tamanho">
                            <strong style={{ boxShadow: `0px 2px 15px 0px ${typeColors[nomeTipoUm.name]}` }} className="card-tamanho"> {tamanho + ' m'}</strong>
                        </div>
                    </div>
                    <div className="origem-main" style={{ textAlign: 'center' }}>
                        <h5>
                            <label style={{
                                backgroundColor: typeColors[nomeTipoUm.name],
                                borderRadius: '10px',
                                padding: '0.5rem'
                            }}>
                                {nomeTipoUm.name}
                            </label>
                        </h5>
                        <br />
                    </div>
                </Card>
            </form>
        </div>
    )

}
export default ListPoke;


