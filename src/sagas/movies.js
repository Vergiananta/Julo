import axios from "axios";
import {
    FIND_DETAIL,
    FIND_DETAIL_FAILURE,
    FIND_DETAIL_SUCCESS,
    FIND_MOVIE,
    FIND_MOVIE_FAILURE,
    FIND_MOVIE_SUCCESS
} from "../constant";
import { put, takeLatest } from 'redux-saga/effects';


function* getMoviesPaginate(action) {
    let page = action.meta.page
    let search = action.meta.search
    let result = yield axios.get(`http://www.omdbapi.com/?s=${search}&page=${page}&apiKey=9711a07a`)
            .then(data => {
                return {
                    type: FIND_MOVIE_SUCCESS,
                    data: data,
                }
            }).catch(err => {
                return {
                    type: FIND_MOVIE_FAILURE,
                    error: err
                }
            });
    yield put(result)
}

function* getDetailMovie(action) {
    let id = action.imdb

    let result = yield axios.get(`http://www.omdbapi.com/?i=${id}&apiKey=9711a07a`)
        .then(data => {
            return {
                type: FIND_DETAIL_SUCCESS,
                data: data
            }
        }).catch(err => {
            return {
                type: FIND_DETAIL_FAILURE,
                error: err
            }
        })
    yield put(result)
}

export function* watchGetMoviesPaginate() {
    yield takeLatest(FIND_MOVIE, getMoviesPaginate)
}

export function* watchGetDetail() {
    yield takeLatest(FIND_DETAIL, getDetailMovie)
}
