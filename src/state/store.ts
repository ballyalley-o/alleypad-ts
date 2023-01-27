import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { ActionType } from './action-types'

const store = createStore(reducers, {}, applyMiddleware(thunk));

store.dispatch({
    type: ActionType.INSERT_CELL_BEFORE,
    payload: {
        id: null,
        type: "code"
    }
})

console.log(store.getState())

export default store