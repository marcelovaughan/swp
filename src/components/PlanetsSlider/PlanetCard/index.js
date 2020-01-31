import React, { useEffect } from 'react';
import PropTypes from "prop-types";

import { formatNumber, getFilmsCounterText } from '../../../Utils/functions';
import Loader from '../../Loader'


export default function PlanetCard(props) {
    
    const { index, isActive, planet, loading, handlegGetPlanet } = props

    useEffect(() => {    
        if(isActive){
            setTimeout(()=>{
                console.log('chamou')
                handlegGetPlanet(index+1)
            }, 2500)
        }           
    }, [handlegGetPlanet, index, isActive])

    return (
        <li className="frames__item glide__slide">
            <div className="frame" data-ref="planet[el]">
                <div className="notch-contain notch-top"></div>
                <React.Fragment>
                    { loading && !planet && <Loader/>  }
                    <div className="content-contain">
                    {planet && !loading &&
                        <React.Fragment>
                            <h2 data-test="name">{planet && planet.name && planet.name}</h2>

                            <p className="planet-attribute">
                                <span className="font-bold">Population: </span>
                                <span className="font-light" data-test="population">{planet && planet.population && formatNumber(planet.population)}</span>
                            </p>
                            <p className="planet-attribute">
                                <span className="font-bold">Climate: </span>
                                <span className="font-light" data-test="climate">{planet && planet.climate && planet.climate}</span>
                            </p>
                            <p className="planet-attribute">
                                <span className="font-bold">Terrain: </span>
                                <span className="font-light" data-test="terrain">{planet && planet.terrain && planet.terrain}</span>
                            </p>
                            <p className="planet-attribute">
                                <span className="font-bold">Featured in: </span>
                                <span className="font-light" data-test="films">
                                    {planet && planet.films && `${ getFilmsCounterText(planet.films) }`}                                    
                                </span>
                            </p>                            
                        </React.Fragment>                        
                    }
                    </div>
                </React.Fragment>
                <div className="bottom-notch-contain"> 
                    <div className="notch-left"></div>
                    <div className="notch-right"></div> 
                </div>  
            </div>
        </li>
    );
}

PlanetCard.defaulProps = {
    loading: false, 
}

PlanetCard.propTypes = {
    index: PropTypes.number, 
    isActive: PropTypes.bool, 
    planet: PropTypes.object, 
    loading: PropTypes.bool, 
    handlegGetPlanet: PropTypes.func    
};

