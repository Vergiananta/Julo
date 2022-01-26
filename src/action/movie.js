import {FIND_DETAIL, FIND_MOVIE} from "../constant";

export function findMovies(query) {
    return {
        type: FIND_MOVIE,
        meta: query
    }
}

export function findDetail(query) {
    return {
        type : FIND_DETAIL,
        imdb: query
    }
}
