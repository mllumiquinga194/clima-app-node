const axios = require('axios');

const getClima = async (lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=10149540c9e3818680b42e860116481f`);

    if (resp.data.message === 'null is not a float') {
        throw new ERROR(`No hay resultados para la ciudad`);
    }
    
    let temp = resp.data.main.temp;
    return temp;

}

module.exports = {
    getClima
}