import {getDetail, getMoviePaginate} from "./movie";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    getMoviePaginate, getDetail
});

export default rootReducer;
