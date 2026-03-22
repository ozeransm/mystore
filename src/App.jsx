import { LocationProvider, Router, Route } from 'preact-iso';
import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import Users from './pages/Users/index.jsx';
import { NotFound } from './pages/_404.jsx';
import { useEffect, useReducer } from 'preact/hooks';
import { initialState, reducer } from '../reducer/reducer.js';
import Products from './pages/Products/index.jsx';
import Orders from './pages/Orders/index.jsx';
import Contacts from './pages/Contacts/index.jsx';
import Login from './pages/Login/index.jsx';
import Admin from './pages/Admin/index.jsx';

import './style.css';


export function App({ data }){
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({ type: 'setAll', payload: data });
    }, []);
    return(
        <LocationProvider >
                    <Header />
                    <main>
                        <Router>
                            <Route path="/" component={Home} />
                            <Route path="/users" component={Users} data={state} />
                            <Route path="/products" component={Products} data={state} />
                            <Route path="/orders" component={Orders} data={state}/>
                            <Route path="/contacts" component={Contacts} />
                            <Route path="/login" component={Login} data={state}/>
                            <Route path="/x7p9a2lm" component={Admin} data={state} dispatch={dispatch} />
                            <Route default component={NotFound} />
                        </Router>
                    </main>
        </LocationProvider>
    )
}