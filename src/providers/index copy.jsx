import { useState } from "react";
import {resposta} from "../services";

import './providers.css';

export function Weather() {
    const [weatherState, setWeatherState] = useState({           
        cidade: undefined,
        temperatura: 0,
        icone: undefined,
        descricao: undefined,
        sensacao: 0,
        minima: 0,
        maxima: 0,
        pressao: 0,
        umidade: 0,
        vento: 0,
        nascer: 0,
        por: 0            
    });

    //constructor(
    resposta
        .then(({ data }) => {
            setWeatherState((prevState) => ({
                ...prevState, 
                cidade: data.name,
                temperatura: data.main.temp,
                icone: data.weather[0].icon,
                descricao: data.weather[0].description,
                sensacao: data.main.feelslike,
                minima: data.main.tempmin,
                maxima: data.main.temp_max,
                pressao: data.main.pressure,
                umidade: data.main.humidity,
                vento: data.wind.speed,
                nascer: data.sys.sunrise,
                por: data.sys.sunset          
            }))
        }) //)
    ;

    return(
        weatherState
    );
  };




