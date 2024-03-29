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

it("getPeople returns count and results", (done) => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 87,
                results: [0, 1, 2, 3, 4, 5]
            })
        }));
    
    expect.assertions(4);
    swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith("https://swapi.py4e.com/api/people/");
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
        done();
    })
});