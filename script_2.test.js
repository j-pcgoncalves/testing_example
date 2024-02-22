const swapi = require("./script_2");

it("calls swapi to get people", (done) => {
    expect.assertions(1);
    swapi.getPeople().then(data => {
        expect(data.count).toEqual(87);
        done();
    })
});

it("calls swapi to get people with a promise", (done) => {
    expect.assertions(2);
    swapi.getPeoplePromise().then(data => {
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
        done();
    })
});