import {
    FIND_DETAIL,
    FIND_DETAIL_FAILURE,
    FIND_DETAIL_SUCCESS,
    FIND_MOVIE,
    FIND_MOVIE_FAILURE,
    FIND_MOVIE_SUCCESS
} from "../constant";

export const initialState = {
    data: null,
    loading: false,
    error: null,
}

export function getMoviePaginate(state = {...initialState}, action){
    switch (action.type) {
        case FIND_MOVIE:
            console.log("find movie");
            return {
                ...state,
                data : {},
                loading: true
            };
        case FIND_MOVIE_SUCCESS:
            console.log("find city success");
            console.log(action.data);

            return {
                ...state,
                data : action.data,
                loading: false,
                error: null
            }
        case FIND_MOVIE_FAILURE:
            return {
                ...state,
                data : {},
                loading : false,
                error: action.error
            }
        default:
            return {
                ...state,
                data: false
            };
    }
}

export function getDetail(state = {...initialState}, action){
    switch (action.type) {
        case FIND_DETAIL:
            console.log("find movie");
            return {
                ...state,
                data : {},
                loading: true
            };
        case FIND_DETAIL_SUCCESS:
            console.log(action.data);

            return {
                ...state,
                data : action.data,
                loading: false,
                error: null
            }
        case FIND_DETAIL_FAILURE:
            return {
                ...state,
                data : {},
                loading : false,
                error: action.error
            }
        default:
            return {
                ...state,
                data: false
            };
    }
}
