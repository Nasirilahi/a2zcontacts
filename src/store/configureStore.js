import { applyMiddleware, compose, createStore } from "redux"

import thunk from "redux-thunk"
import rootReducer from "../reducers"

const createStoreFactory = compose(
    applyMiddleware(thunk)
)

const finalCreateStore = createStoreFactory(createStore)

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState)
    return store
}