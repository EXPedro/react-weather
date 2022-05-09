import React from "react";
import './datashow.css';
import APIWeather from "../../providers";

function Datashow(){
    return(
        <div className='datashow'>
            <span className='cidade'>{ APIWeather.cidade }</span>
            <h1 className='temperatura'>{ APIWeather.temperatura }</h1>
            <span className='icone'>{ APIWeather.icon }</span>
            <span className='descricao'>{ APIWeather.descricao }</span>
            <span className='sensacao'>Sensação Térmica { APIWeather.sensacao }</span>
            <span className='min'>Mín. { APIWeather.min }</span>
            <span className='max'>Máx. { APIWeather.max }</span>
            <span className='pressao'>Pressão { APIWeather.pressao }</span>
            <span className='umidade'>Umidade { APIWeather.umidade }</span>
            <span className='vento'>Vento(m/s) { APIWeather.vento } (m/s)</span>
            <span className='nascer'>Nascer do Sol { APIWeather.nascer }</span>
            <span className='por'>Pôr do Sol { APIWeather.por }</span>  
        </div>
    )
};

export default Datashow;