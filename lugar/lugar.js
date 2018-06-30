const axios = require('axios');

const getLugarLatLng = async (direction) => {

    let encodeUrl = encodeURI(direction); //para hacer direcciones amigables


    //  lo que le estoy diciendo aqui es que cualquier cosa que me responda esta funcion, me lo guarde en resp
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDXnOHyWIUPqqypneFGq3JqHTssQFiuyHM`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new ERROR(`No hay resultados para la ciudad ${direction}`)
    }

    let location = resp.data.results[0];
    let lat = location.geometry.location.lat;
    let lng = location.geometry.location.lng;
    let direccion = location.formatted_address;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}