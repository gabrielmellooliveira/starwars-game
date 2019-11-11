import { credentials } from './credentials';

const rootURL = 'https://www.googleapis.com/customsearch/v1';
const defaultImage = 'http://www.central3.com.br/wp-content/themes/c3/img/default-placeholder.png';

export class CustomSearchApi {
    static getInfos(term) {
        return fetch(`${rootURL}?key=${credentials.apiKey}&cx=${credentials.searchEngineId}&q=${term}&num=1`)
        .then(response => response.json())
        .then(response => {

            const infos = response.items.map(item => {
                const isValid = item.pagemap && item.pagemap.cse_image && item.pagemap.cse_image.length > 0;

                if (isValid) {
                    return { image: item.pagemap.cse_image[0].src, snippet: item.snippet };
                } else {
                    return { image: defaultImage, snippet: item.snippet };
                }
            });

            return infos;
        })
        .catch(ex => {
            return {
                errorMessage: `Error fetching information with term ${term}`,
                error: ex
            }
        });
    }

    static getImage(term) {
        return fetch(`${rootURL}?key=${credentials.apiKey}&cx=${credentials.searchEngineId}&q=${term}&searchType=image&num=1`)
        .then(response => response.json())
        .then(response => {

            const image = response.items.map(item => {
                return item.link;
            });

            return image;
        })
        .catch(ex => {
            return {
                errorMessage: `Error fetching image with term ${term}`,
                error: ex
            }
        });
    }
}
