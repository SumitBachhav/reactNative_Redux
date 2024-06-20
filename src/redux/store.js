import {applyMiddleware, combineReducers, configureStore} from "@reduxjs/toolkit"
import CounterSlice from "./features/CounterSlice"
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
 
const reducers = combineReducers({
    counter: CounterSlice,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['counter']
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
});

const persistor = persistStore(store);

export {store, persistor};