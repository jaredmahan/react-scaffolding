import { combineReducers } from "redux";
import * as c from "../constants";

// Root Reducer
const reducer = (state = { isFetching: false, items: [] }, action) => {
    switch (action.type) {
        case c.REQUEST_POSTS:
            return Object.assign({}, state, { isFetching: true });
        case c.RECEIVE_POSTS:
            return Object.assign({}, state, { isFetching: false, items: action.posts, lastUpdated: action.receivedAt });
        default:
            return state;
    }
};


export default reducer;