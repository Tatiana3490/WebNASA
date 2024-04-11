console.log('Hola mundo desde mi script.js')

const url = `https://api.nasa.gov/planetary/apod`; //Esto sería dónde tiene que buscar la info.

const parameters = {          //Estos son los parametros que aparecen en la DOC de Nasa para solicitar info.
    start_date: '2024-03-01',   // Rango de fechas que queremos ver
    end_date: '',               //No poner fecha = día actual
    api_key: 'DdNzusEw3GVTzcgeienvamp6e69TI1fZLT02oxyE' //mi API Key
}

const query = new URLSearchParams(parameters).toString(); //SE pide una nueva url con los parámetros anteriores y los hacemos en cadena de texto
console.log(query)

const urlRequest = `${url}?${query}`;   //Combinar todo en una dirección web completa
console.log(urlRequest);

const getDataAPI = async(url) => {  //Pedimos la info al servidor con la url anterior
    const result = await fetch(url);
    return result.json();
}

const main = async() => {   //Petición a la API 
    const result = await getDataAPI(urlRequest);
    console.log(result);
}

main();     //Para ver la info solicitada