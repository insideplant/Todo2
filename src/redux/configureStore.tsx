import { configureStore } from '@reduxjs/toolkit'
import { createStore,combineReducers } from "redux";
import countReducer from "./countReducer";
import todosReducer from "./todosReducer";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    countReducer,
    todosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer)
const persistor = persistStore(store)
export type RootState = ReturnType<typeof rootReducer>
export { store, persistor }