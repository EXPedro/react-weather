import React,  { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {resposta} from "../services";

  function useWeatherProvider() {
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

    return(
        <>
        
        </>
    );
  };



