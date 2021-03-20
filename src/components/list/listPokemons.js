import React from 'react';
import { Card } from 'antd';

import 'antd/dist/antd.css';
import './styles.css';

import Heart from '../../assests/png/heart.png';
import Height from '../../assests/png/height.png';
import Weighing from '../../assests/png/weighing.png';

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
                            boxShadow: '5px 10px',
                            width: '90%',
                            borderRadius: '20px',
                            color: typeColors[nomeTipoUm.name],
                            border: '1px solid',
                            borderColor: typeColors[nomeTipoUm.name],
                        }} title={<strong>{nome}</strong>} />
                        <div className="height-div"
                            style={{
                                textAlign: 'left',
                                marginLeft: '10px',
                                marginTop: '20px'
                            }}>
                            <h3 style={{ marginTop: '40px' }}>
                                <img alt="heart" src={Heart} style={{ width: '15%' }} />
                                <strong> {vida + ' hp'}</strong>
                            </h3>
                            <h3>
                                <img alt="heart" src={Weighing} style={{ width: '15%' }} />
                                <strong> {peso + ' kg'}</strong>
                            </h3>
                            <h3 style={{ marginBottom: '40px' }}>
                                <img alt="heart" src={Height} style={{ width: '15%' }} />
                                <strong> {tamanho + ' m'}</strong>
                            </h3>
                        </div>
                        <div className="origem-main" style={{ textAlign: 'center' }}>
                            <h5>
                                <label style={{
                                    backgroundColor: typeColors[nomeTipoUm.name],
                                    borderRadius: '20px',
                                    padding: '8px'
                                }}>
                                    {nomeTipoUm.name}
                                </label>
                                <label style={{
                                    backgroundColor: typeColors[nomeTipoDois.name],
                                    borderRadius: '20px',
                                    padding: '8px',
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
                        backgroundColor: '#FFF',
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
                        boxShadow: '5px 10px',
                        width: '90%',
                        borderRadius: '20px',
                        color: typeColors[nomeTipoUm.name],
                        border: '1px solid',
                        borderColor: typeColors[nomeTipoUm.name],
                    }} title={<strong>{nome}</strong>} />


                    <div className="height-div" style={{
                        textAlign: 'left', marginLeft: '10px', marginTop: '20px',
                        borderColor: 'black', borderRadius: '20px'
                    }}>
                        <h3 style={{ marginTop: '40px' }}>
                            <img alt="heart" src={Heart} style={{ width: '15%' }} />
                            <strong> {vida + ' hp'}</strong>
                        </h3>
                        <h3>
                            <img alt="heart" src={Weighing} style={{ width: '15%' }} />
                            <strong> {peso + ' kg'}</strong>
                        </h3>
                        <h3 style={{ marginBottom: '40px' }}>
                            <img alt="heart" src={Height} style={{ width: '15%' }} />
                            <strong> {tamanho + ' m'}</strong>
                        </h3>
                    </div>
                    <div className="origem-main" style={{ textAlign: 'center' }}>
                        <h5>
                            <label style={{
                                backgroundColor: typeColors[nomeTipoUm.name],
                                borderRadius: '20px',
                                padding: '8px'
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


