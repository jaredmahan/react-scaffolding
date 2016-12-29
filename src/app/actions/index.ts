import fetch from "isomorphic-fetch";
import * as c from "../constants";

// Action Creators (Action Creators return actions)
export function requestsPosts() { return { type: c.REQUEST_POSTS }; }
export function receivePosts(json) {
    let posts = json.data.children.map(child => child.data);
    console.log(posts);
    return { type: c.RECEIVE_POSTS, posts: posts, receivedAt: Date.now() };
}

// Thunk
export function fetchPosts() {
    return dispatch => {
        dispatch(requestsPosts());
        // Uses fetch polyfill and then dispatches the receive Posts
        return fetch("https://api.reddit.com/r/news", {
            method: "GET",
            headers: {
                "Accept": "application/json, application/xml, text/plain, text/html, *.*",
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
            },
        })
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            })
            .then(json => {
                dispatch(receivePosts(json));
            });
    };
}
