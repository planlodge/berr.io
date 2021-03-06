import store            from '../Store'
import * as APIFunction from '../actions/API-data'

let server = "https://api.punkapi.com/v2/beers"

export function getAllBeers(page, limit) {
    return fetch(server + "?page=" + page + "&per_page=" + limit)
        .then(response => response.json())
        .then(json => {
            console.log("Beers", json);
            store.dispatch(APIFunction.getBeerSuccess(json));
            store.dispatch(APIFunction.getPopularBeerSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getRecentBeers(page, limit) {
    return fetch(server + "?page=" + page + "&per_page=" + limit)
        .then(response => response.json())
        .then(json => {
            console.log("Recent Beers", json);
            store.dispatch(APIFunction.getRecentBeerSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getMoreBeers(page, limit) {
    return fetch(server + "?page=" + page + "&per_page=" + limit)
        .then(response => response.json())
        .then(json => {
            console.log("More Beers", json);
            store.dispatch(APIFunction.getMoreBeerSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getRandomBeer() {
    return fetch(server + "/random")
        .then(response => response.json())
        .then(json => {
            console.log("Random Beer", json[0]);
            store.dispatch(APIFunction.getRandomBeerSuccess(json[0]));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getBeerDetail(id) {
    return fetch(server + "/" + id)
        .then(response => response.json())
        .then(json => {
            console.log("Beer Detail", json[0]);
            store.dispatch(APIFunction.getSingleBeerSuccess(json[0]));
            return json;
        })
        .catch((err) => console.log(''));
}

export function searchByName(name) {
    return fetch(server + "?beer_name=" + name)
        .then(response => response.json())
        .then(json => {
            console.log("Beer Search By Name", json);
            store.dispatch(APIFunction.getBeerSearchByNameSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function searchByParams(params) {
    return fetch(server + "?" + params + "&per_page=80")
        .then(response => response.json())
        .then(json => {
            console.log("From Search", json);
            store.dispatch(APIFunction.getBeerSearchByNameSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function goBack() {
    window.history.back();
}
