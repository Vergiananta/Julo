import {watchGetDetail, watchGetMoviesPaginate} from "./movies";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        watchGetDetail(), watchGetMoviesPaginate()
    ])
}
