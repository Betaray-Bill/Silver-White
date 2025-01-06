import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default storage (localStorage)
import { combineReducers } from 'redux';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import sellerReducer from '../features/sellerSlice.js';
import userReducer from '../features/userSlice.js';

// Redux Persist configuration
const persistConfig = {
    key: 'root', // Key to persist data
    storage, // Type of storage to use
};

const rootReducer = combineReducers({
    seller: sellerReducer, // Add other reducers here
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Persistor for Redux Persist
export const persistor = persistStore(store);