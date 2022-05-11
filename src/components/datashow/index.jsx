import React from "react";
import './datashow.css';
import { useState, useEffect } from 'react';
import { options } from "../../services";
import axios from "axios";
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
            feels_like:20.4,
            temp_min:18.95,
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

    useEffect(() => {
        axios.request(options).then(({ data }) => {
            setClima({
                coord:{
                    lon: data.coord.lon,
                    lat: data.coord.lat
                    },
                weather:[{
                    id: data.weather[0].id,
                    main: data.weather[0].main,
                    description: data.weather[0].description,
                    icon: data.weather[0].icon
                    }],
                base: data.base,
                main:{
                    temp: data.main.temp,
                    feels_like: data.main.feels_like,
                    temp_min: data.main.temp_min,
                    temp_max: data.main.temp_max,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity
                    },
                visibility:data.visibility,
                wind:{
                    speed: data.wind.speed,
                    deg: data.wind.deg
                    },
                clouds:{
                    all:data.clouds.all
                    },
                dt: data.dt,
                sys:{
                    type: data.sys.type,
                    id: data.sys.id,
                    country: data.sys.country,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset
                    },
                timezone: data.timezone,
                id: data.id,
                name: data.name,
                cod: data.cod
            })
        })
    }, []);

    return(
        <div className='datashow'>
            <span className='cidade'>{clima.name}</span>
            <h1 className='temperatura'>{numeroComVirgula(clima.main.temp)}°C</h1>
            <span className='icone'>.{clima.weather[0].icon}</span>
            <span className='descricao'>{clima.weather[0].description}</span>
            <span className='sensacao'>Sensação Térmica: {numeroComVirgula(clima.main.feels_like)}°C</span>
            <span className='min'>Mín: {numeroComVirgula(clima.main.temp_min)}°C</span>
            <span className='max'>Máx: {numeroComVirgula(clima.main.temp_max)}°C</span>
            <span className='pressao'>Pressão: {clima.main.pressure}hPa</span>
            <span className='umidade'>Umidade: {clima.main.humidity}%</span>
            <span className='vento'>Vento: {numeroComVirgula(clima.wind.speed)}m/s</span>
            <span className='nascer'>Nascer do Sol: {converteUnixTime(clima.sys.sunrise)}</span>
            <span className='por'>Pôr do Sol: {converteUnixTime(clima.sys.sunset)}</span>  
        </div>
    )
};

export default Datashow;