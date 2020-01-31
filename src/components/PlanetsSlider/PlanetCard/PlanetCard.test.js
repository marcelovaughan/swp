import React from "react"
import { configure, mount, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import PlanetCard from "./index";

import { formatNumber, getFilmsCounterText } from '../../../Utils/functions';

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

configure({ adapter: new Adapter() });

describe("Planet Card Render", () => {
  
    jest.setTimeout(120000);
  
    const defaultProps = {
        index: null, 
        isActive: false, 
        planet: null, 
        loading: false, 
        handlegGetPlanet: ()=>{}
    };

    const successProps = {
        index: 0, 
        isActive: true, 
        planet: mockedPlanet, 
        loading: false, 
        handlegGetPlanet: ()=>{}
    };
 

    it("Render the component", () => {
        const component = mount(<PlanetCard {...defaultProps} />);
        expect(component.debug()).toMatchSnapshot();
    });

    it("Render the component with Tatooine Planet info", async () => {        
        const wrapper = shallow(<PlanetCard {...successProps} />);

        const name = wrapper.find('[data-test="name"]').children().text();
        expect(name).toBe(mockedPlanet.name);

        const population = wrapper.find('[data-test="population"]').children().text();
        expect(population).not.toBe(mockedPlanet.population);        
        expect(population).toBe(formatNumber(mockedPlanet.population));

        const climate = wrapper.find('[data-test="climate"]').children().text();
        expect(climate).toBe(mockedPlanet.climate);

        const films = wrapper.find('[data-test="films"]').children().text();
        const filmsText = `${getFilmsCounterText(mockedPlanet.films) }`
        expect(films).toBe(filmsText);        
    });

    it("Render the component with Zero featured films", async () => {        
        mockedPlanet.films = []
        const wrapper = shallow(<PlanetCard {...successProps} />);
        const films = wrapper.find('[data-test="films"]').children().text();        

        const filmsTextEmpty = "0 (citation only)"
        expect(films).toBe(filmsTextEmpty);
    });
});
