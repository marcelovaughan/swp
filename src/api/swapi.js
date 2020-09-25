
const URL_API = "http://swapi.dev/api"

export const getPlanet = async (planetId) => { 
    const data = await fetch(URL_API + "/planets/" + planetId)
        .then(res => res.json())
        .then(data => {        
        return data        
    })
    .catch(err => {
        throw err
    });
    return data;
};

export const getPlanetsCount = async () => {
    const data = await fetch(URL_API + "/planets")
      .then(res => res.json())
      .then(data => {
        if(data.count){
          return data.count        
        }        
    })
    .catch(err => {
        throw err
    });
    return data;
};