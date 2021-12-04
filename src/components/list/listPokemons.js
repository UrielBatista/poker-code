import React from 'react';

import 'antd/dist/antd.css';
import './styles.css';
import './poker_styles.css';

import { Progress } from 'antd';
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
                                backgroundColor: '#778899',
                                borderRadius: '20px',
                                borderStyle: 'solid',
                                borderColor: typeColors[nomeTipoUm.name],
                                borderWidth: '10px'
                            }}>
                                <div className="progress-bar">
                                    <Progress strokeColor={typeColors[nomeTipoUm.name]} percent={vida} steps={10} format={percent => `${percent} Hp`} />
                                    <div className="kilo-data">
                                        <Progress strokeColor={typeColors[nomeTipoUm.name]} type="circle" percent={peso} width={90} format={percent => `${percent} Kg`} />
                                    </div>
                                    <div className="tamanho-data">
                                        <Progress strokeColor={typeColors[nomeTipoUm.name]} type="circle" percent={tamanho} width={90} format={percent => `${percent} M`} />
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

            // <div className="user_card" style={{
            //     borderRadius: '20px',
            //     borderStyle: 'solid',
            //     borderColor: typeColors[nomeTipoUm.name],
            //     borderWidth: '10px'
            // }}>
            //     <div className="flipper">
            //     <div className="d-flex justify-content-center">
            //         <div className="brand_logo_container" style={{
            //             borderRadius: '100px',
            //             borderStyle: 'solid',
            //             borderColor: typeColors[nomeTipoUm.name],
            //             background: `url(${typeImage[nomeTipoUm.name]}) center`,
            //             borderWidth: '10px'
            //         }}>
            //             <img alt="img-pokemon" className="image-api"
            //                 src={url}
            //             />
            //         </div>

            //     </div>
            //     <div className="d-flex justify-content-center form_container">
            //         <form>
            //             <button type="button" name="button" className="btn name_btn" style={{
            //                 marginLeft: '5%',
            //                 backgroundColor: '#e4e4e4',
            //                 marginBottom: '15px',
            //                 width: '90%',
            //                 borderRadius: '10px',
            //                 border: 'solid',
            //                 borderColor: typeColors[nomeTipoUm.name],
            //                 padding: '0.3rem'
            //             }}>{<strong>{nome}</strong>}</button>
            //             <button type="button" name="button" className="btn login_btn">{vida + 'Hp'}</button>
            //             <div className="d-flex justify-content-center mt-3 login_container">
            //                 <button type="button" name="button" className="btn login_btn">{peso + 'kg'}</button>
            //                 <button type="button" name="button" className="btn login_btn">{tamanho + 'm'}</button>
            //             </div>
            //             <br></br>
            //             <button type="button" name="button" style={{
            //                 backgroundColor: typeColors[nomeTipoUm.name],
            //                 borderRadius: '10px',
            //                 padding: '0.5rem',
            //                 border: 'none'
            //             }}>{nomeTipoUm.name}</button>
            //             <button type="button" name="button" style={{
            //                 backgroundColor: typeColors[nomeTipoDois.name],
            //                 borderRadius: '10px',
            //                 padding: '0.5rem',
            //                 marginLeft: '5px',
            //                 border: 'none'

            //             }}>{nomeTipoDois.name}</button>
            //         </form>
            //     </div>
            //     </div>
            // </div>
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
                            backgroundColor: '#778899',
                            borderRadius: '20px',
                            borderStyle: 'solid',
                            borderColor: typeColors[nomeTipoUm.name],
                            borderWidth: '10px'
                        }}>
                            <div className="progress-bar">
                                <Progress strokeColor={nomeTipoUm.name == 'normal' ? "black" : typeColors[nomeTipoUm.name]} percent={vida} steps={10} format={percent => `${percent} Hp`} />
                                <div className="kilo-data">
                                    <Progress strokeColor={nomeTipoUm.name == 'normal' ? "black" : typeColors[nomeTipoUm.name]} type="circle" percent={peso} width={90} format={percent => `${percent} Kg`} />
                                </div>
                                <div className="tamanho-data">
                                    <Progress strokeColor={nomeTipoUm.name == 'normal' ? "black" : typeColors[nomeTipoUm.name]} type="circle" percent={tamanho} width={90} format={percent => `${percent} M`} />
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







        // <div className="user_card" style={{
        //     borderRadius: '20px',
        //     borderStyle: 'solid',
        //     borderColor: typeColors[nomeTipoUm.name],
        //     borderWidth: '10px'
        // }}>
        //     <div className="d-flex justify-content-center">
        //         <div className="brand_logo_container" style={{
        //             borderRadius: '100px',
        //             borderStyle: 'solid',
        //             borderColor: typeColors[nomeTipoUm.name],
        //             background: `url(${typeImage[nomeTipoUm.name]}) center`,
        //             borderWidth: '10px'
        //         }}>
        //             <img alt="img-pokemon" className="image-api"
        //                 src={url}
        //             />

        //         </div>
        //     </div>
        //     <div className="d-flex justify-content-center form_container">
        //         <form>
        //             <button type="button" name="button" className="btn name_btn" style={{
        //                 marginLeft: '5%',
        //                 backgroundColor: '#e4e4e4',
        //                 marginBottom: '15px',
        //                 width: '90%',
        //                 borderRadius: '10px',
        //                 border: 'solid',
        //                 borderColor: typeColors[nomeTipoUm.name],
        //                 padding: '0.3rem'
        //             }}>{<strong>{nome}</strong>}</button>
        //             <button type="button" name="button" className="btn login_btn">{vida + 'hp'}</button>
        //             <div className="d-flex justify-content-center mt-3 login_container">
        //                 <button type="button" name="button" className="btn login_btn_kg">{peso + 'kg'}</button>
        //                 <button type="button" name="button" className="btn login_btn_m">{tamanho + 'm'}</button>
        //             </div>
        //             <br></br>
        //             <button type="button" name="button" style={{
        //                 backgroundColor: typeColors[nomeTipoUm.name],
        //                 borderRadius: '10px',
        //                 padding: '0.5rem',
        //                 border: 'none'
        //             }}>{nomeTipoUm.name}</button>
        //         </form>
        //     </div>


        // </div>
    )
}
export default ListPoke;


