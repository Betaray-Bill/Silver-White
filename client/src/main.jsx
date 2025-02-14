import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './app/store.js';
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
</BrowserRouter>,)
