const base_url = 'https://rest.resvoyage.com';

const token_url = base_url + '/api/v1/public/token?clientname=VslYXzycTIi';

const flight_search_url = base_url + '/api/v1/air/search';

const airport_search_url = base_url + '/api/v1/air/references/airports?search=';

const city_search_url = base_url + '/api/v1/hotel/references/destination/';

const hotel_search_url = base_url + '/api/v1/hotel/search?';

const hotel_detail_url = base_url + '/api/v1/hotel/details';

export {
    base_url,
    token_url,
    flight_search_url,
    airport_search_url,
    city_search_url,
    hotel_search_url,
    hotel_detail_url
};
