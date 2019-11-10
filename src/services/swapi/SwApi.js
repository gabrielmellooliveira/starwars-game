export class SwApi {
    static GetRootUrl = "https://swapi.co/api";

    static GetPeople() {
        return SwApi.Request(`${SwApi.GetRootUrl}/people`);
    }

    static Request(url) {
        return fetch(url)
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                return data;
            })
            .catch(function(err) {
                return { 
                    error: 'Error fetching people information from star wars' 
                };
            });
    }
}