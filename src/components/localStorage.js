//Persistent browser storage
//It is not a very good implementation: State is being managed in React and
//in browser localStorage. But even so, it works.

import store from 'store';

//For later though:
//It is correct to manage the entire state in just a key of localStorage?
//Should I detach state components in its own keys?
//What are the localStorage limits bearing in mind that state objects are being
//saved in a unique string?

const KEY = "tasks-state";

export const getStoredState = () => store.get(KEY);
export const setStoredState = (newState) => store.set(KEY, newState);
