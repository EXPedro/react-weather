import React from "react";
import './datashow.css';

import { cidade } from '../../providers' 

function Datashow(){
    return(
        <div className='datashow'>
            <span className='cidade'>{ cidade }</span>
            <h1 className='temperatura'>20 °C</h1>
            <span className='icone'>icon</span>
            <span className='descricao'>Descrição</span>
            <span className='sensacao'>Sensação Térmica</span>
            <span className='min'>Mín.</span>
            <span className='max'>Max.</span>
            <span className='pressao'>Pressão</span>
            <span className='umidade'>Umidade</span>
            <span className='vento'>Vento (m/s)</span>
            <span className='nascer'>Nascer do Sol</span>
            <span className='por'>Pôr do Sol</span>
        </div>
    )
};

export default Datashow;