import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import Users from './pages/Users/users.jsx';
import { NotFound } from './pages/_404.jsx';
import { useEffect, useReducer } from 'preact/hooks';
import { initialState, reducer } from '../reducer/reducer.js';

import './style.css';


export function App(data){
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({ type: 'setUsers', payload: data.data.users });
    }, []);
    return(
        <LocationProvider >
                    <Header />
                    <main>
                        <Router>
                            <Route path="/" component={Home} />
                            <Route path="/users" component={Users} data={state} />
                            <Route default component={NotFound} />
                        </Router>
                    </main>
        </LocationProvider>
    )
}