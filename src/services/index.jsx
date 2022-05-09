import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: 'Curitiba,br',
    lat: '0',
    lon: '0',
    id: '2172797',
    lang: 'pt_br',
    units: 'metric',
    mode: 'json'
  },
  headers: {
    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
    'X-RapidAPI-Key': ''
  }
};

const resposta = 
    axios.request(options).then(function (response) {
      console.log(response.data);
      return response.data;
    }).catch(function (error) {
      console.error(error);
    });

export {options, resposta};