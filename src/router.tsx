import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Pokedex } from './pages/Pokedex/Pokedex';
import { DefaultLayout } from './layout/DefaultLayout';
import { Settings } from './pages/Settings';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/pokedex' element={<Pokedex />} />
                <Route path='/settings' element={<Settings/>} />
            </Route>
        </Routes>
    );
}