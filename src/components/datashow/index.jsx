import React from "react";
import './datashow.css';
import Weather from '../../data/weather.json';
//import Weather from '../../providers/index.jsx';
//import { resposta } from "../../services";  src\providers\index.js
import {numeroComVirgula, converteUnixTime} from '../../utils/utils.js';

const Datashow = () => {

    //const Weather = resposta;
    //Substitui ponto por vírgula nas variáveis
    const temperatura = numeroComVirgula(Weather.main.temp);
    const sensacao = numeroComVirgula(Weather.main.feelslike);
    const min = numeroComVirgula(Weather.main.tempmin);
    const max = numeroComVirgula(Weather.main.temp_max);
    const vento = numeroComVirgula(Weather.wind.speed);

    //Converte Tempo
    const nascer = converteUnixTime(Weather.sys.sunrise);
    const por = converteUnixTime(Weather.sys.sunset);

    return(
        <div className='datashow'>
            <span className='cidade'>{Weather.name}</span>
            <h1 className='temperatura'>{temperatura}°C</h1>
            <span className='icone'>.{Weather.weather[0].icon}</span>
            <span className='descricao'>{Weather.weather[0].description}</span>
            <span className='sensacao'>Sensação Térmica: {sensacao}°C</span>
            <span className='min'>Mín: {min}°C</span>
            <span className='max'>Máx: {max}°C</span>
            <span className='pressao'>Pressão: {Weather.main.pressure}hPa</span>
            <span className='umidade'>Umidade: {Weather.main.humidity}%</span>
            <span className='vento'>Vento: {vento}m/s</span>
            <span className='nascer'>Nascer do Sol: {nascer}</span>
            <span className='por'>Pôr do Sol: {por}</span>  
        </div>
    )
};

export default Datashow;