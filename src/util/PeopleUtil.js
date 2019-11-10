export class PeopleUtil {
    static GetPersonId(url) {
        let items = url.split('/');
        return items[5];
    }

    static BuildPersonUrl(personId) {
        return `https://swapi.co/api/people/${personId}`;
    }
}