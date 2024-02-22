const getPeoplePromise = () => {
    return fetch("https://swapi.py4e.com/api/people/")
        .then(response => response.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        });
};

const getPeople = async () => {
    const getRequest = await fetch("https://swapi.py4e.com/api/people/");
    const data = await getRequest.json();

    return {
        count: data.count,
        results: data.results
    };
};

module.exports = {
    getPeople,
    getPeoplePromise
}