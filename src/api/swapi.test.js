/*
import { expect } from "chai";
import { getPlanetsCount, getPlanet } from './swapi'


describe("SWAPI Fetch", () => {
    jest.setTimeout(10000);

    test("Should get Planets list", async () => {
      const count = await getPlanetsCount();
      expect(count).to.be.an('number')
      expect(count).to.be.equal(61)
    });

    test("Should get a Planet", async () => {
        const planet = await getPlanet(1);
        expect(planet).to.be.an('object')
        expect(planet.name).to.be.an('string').equal('Tatooine')  
        expect(planet.films).to.be.an('array')        
    });

    test("Should get a Planet that not exists", async () => {
        const planet = await getPlanet(0);
        expect(planet).to.be.an('object')
        expect(planet.detail).to.be.an('string').equal('Not found')             
    });

    test("Try to pass wrong type value to getPlanet", async () => {
        const planet = await getPlanet('Tatooine');
        expect(planet).to.be.an('object')
        expect(planet.detail).to.be.an('string').equal('Not found')             
    });
})*/