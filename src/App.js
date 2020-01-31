import React, { useState, useEffect, useCallback } from 'react'
import { getRandomInt } from './Utils/functions'
import { getPlanetsCount, getPlanet } from './api/swapi'
import { carouselOptions } from './Utils/carouselOptions'

import './App.css'

import PlanetsSlider from './components/PlanetsSlider'
import PlanetCard from './components/PlanetsSlider/PlanetCard'
import Loader from './components/Loader'
import Header from './components/Header'
import Error from './components/Error'


function App() {
  const [planetsCount, setPlanetsCount] = useState(0)
  const [planets, setPlanets] = useState(null)
  const [goto, setGoto] = useState(null)
  const [error, setError] = useState(false)
  const [planet, setPlanet] = useState(null)
  const [loading, setLoading] = useState(false)

  const _getPlanetsCount = useCallback(async () => {
    try {
      const count = await getPlanetsCount()
      setPlanetsCount(count);      
    } catch (error) {
      setError(true);
      setLoading(false)
    }
  }, []);

  const _getPlanet = useCallback(async (planetId) => { 
    setLoading(true) 
    try {
      const _planet = await getPlanet(planetId)
      setPlanet(_planet)
      setLoading(false)
    } catch (error) {
      setError(true);
      setLoading(false)
    }
  }, []);

  useEffect(() => {    
    _getPlanetsCount().then( async () => {
      const randomPlanetId = getRandomInt(0, planetsCount-1);
      if(planetsCount){
        setGoto(randomPlanetId);
        setPlanets([...Array(planetsCount)]);
      }
    })    
  }, [_getPlanetsCount, planetsCount])

  const handleNext = () => {
    setPlanet(null)
    setLoading(false)
    const randomPlanetId = getRandomInt(1, planetsCount-1);      
    setGoto(randomPlanetId);            
  }

  if(error){
    return (
      <Error/>      
    )
  }
  
  return (
    <div className="App">
      {planets && planets.length > 0 ?
        <React.Fragment>
          <Header/>
          <PlanetsSlider options={carouselOptions} go={goto}>
              {planets.map((p, i) => (
                <PlanetCard
                  key={i}
                  index={i}
                  isActive={i === goto}
                  handlegGetPlanet={_getPlanet}
                  planet={i === goto ? planet : null}
                  loading={i === goto ? loading : false}
                />
              ))}
          </PlanetsSlider>
          <button className="btn-next" onClick={()=> handleNext()}>Next</button>
        </React.Fragment>
      :
      <Loader/>
      }      
    </div>
  );
}

export default App;
