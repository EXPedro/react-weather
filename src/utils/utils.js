export function numeroComVirgula(numberoComPonto){
    return numberoComPonto.toString().replace('.',',');
};

export function converteUnixTime(unixTime){

    var dataUnix2Data = new Date(unixTime * 1000);
    var horas = dataUnix2Data.getHours();
    var minutos =  dataUnix2Data.getMinutes();
    var segundos = dataUnix2Data.getSeconds();

    return horas + "h" + minutos + "min" + segundos + "s";
};