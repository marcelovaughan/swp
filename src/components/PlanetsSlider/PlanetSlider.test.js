import React from "react"
import { configure, mount, shallow, render } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import PlanetSlider from "./index";
import PlanetCard from '../PlanetsSlider/PlanetCard'
import { carouselOptions } from '../../Utils/carouselOptions'

configure({ adapter: new Adapter() });

const mockedPlanet = 
    { name: 'Tatooine',
    climate: 'arid',
    terrain: 'desert',
    population: '200000',
    films:
    [   'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/' ],
    }

const planets = [...Array(10)]
const goto = 1
const loading = true
const defaultProps = {
    goto: 1,
    options: carouselOptions
}

describe("Planet Slider Render", () => {
    it("Render the component", () => {
        const rendered = render(            
            <PlanetSlider {...defaultProps}>
                {planets.map((p, i) => (
                    <PlanetCard
                    key={i}
                    index={i}
                    isActive={i === goto}
                    handlegGetPlanet={() => {}}
                    planet={i === goto ? mockedPlanet : null}
                    loading={i === goto ? loading : false}
                    />
                ))}
            </PlanetSlider>            
        );
        const slidesCount = rendered.find('li').length;
        expect(slidesCount).toBe(planets.length);        
    });    
});
