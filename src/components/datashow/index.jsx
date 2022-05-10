import React from "react";
import './datashow.css';
import { useState, useEffect } from 'react';
import { resposta } from "../../services";
//import Weather from '../../data/weather.json';
//import Weather from '../../providers/index.jsx';
//import { resposta } from "../../services";  src\providers\index.js
import {numeroComVirgula, converteUnixTime} from '../../utils/utils.js';

const Datashow = () => {

    const [clima, setClima] = useState({
        coord:{
            lon: 0,
            lat: 0
            },
        weather:[{
            id:803,
            main:"Clouds",
            description:"nublado",
            icon:"04d"
            }],
        base:"stations",
        main:{
            temp:20.19,
            feelslike:20.4,
            tempmin:18.95,
            temp_max:21.16,
            pressure:1020,
            humidity:83
            },
        visibility:10000,
        wind:{
            speed:2.57,
            deg:50
            },
        clouds:{
            all:75
            },
        dt:1648558182,
        sys:{
            type:2,
            id:67576,
            country:"BR",
            sunrise:1648545878,
            sunset:1648588738
            },
        timezone:-10800,
        id:6322752,
        name:"Curitiba",
        cod:200
    });

    //const Weather = resposta;
    //Substitui ponto por vírgula nas variáveis
    const temperatura = numeroComVirgula(clima.main.temp);
    const sensacao = numeroComVirgula(clima.main.feelslike);
    const min = numeroComVirgula(clima.main.tempmin);
    const max = numeroComVirgula(clima.main.temp_max);
    const vento = numeroComVirgula(clima.wind.speed);

    //Converte Tempo
    const nascer = converteUnixTime(clima.sys.sunrise);
    const por = converteUnixTime(clima.sys.sunset);

    return(
        <div className='datashow'>
            <span className='cidade'>{clima.name}</span>
            <h1 className='temperatura'>{temperatura}°C</h1>
            <span className='icone'>.{clima.weather[0].icon}</span>
            <span className='descricao'>{clima.weather[0].description}</span>
            <span className='sensacao'>Sensação Térmica: {sensacao}°C</span>
            <span className='min'>Mín: {min}°C</span>
            <span className='max'>Máx: {max}°C</span>
            <span className='pressao'>Pressão: {clima.main.pressure}hPa</span>
            <span className='umidade'>Umidade: {clima.main.humidity}%</span>
            <span className='vento'>Vento: {vento}m/s</span>
            <span className='nascer'>Nascer do Sol: {nascer}</span>
            <span className='por'>Pôr do Sol: {por}</span>  
        </div>
    )
};

export default Datashow;