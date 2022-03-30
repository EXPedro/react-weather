import React from "react";
import './datashow.css';

function Datashow(){
    return(
        <div className='datashow'>
            <span>Curitiba</span>
            <h1>20 °C</h1>
            <span>icon</span>
            <span>Descrição</span>
            <span>Sensação Térmica</span>
            <span>Mìn.</span>
            <span>Max.</span>
            <span>Pressão</span>
            <span>Umidade</span>
            <span>Vento (m/s)</span>
            <span>Nascer do Sol</span>
            <span>Pôr do Sol</span>
        </div>
    )
};

export default Datashow;