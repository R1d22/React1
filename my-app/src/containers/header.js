import { Routes, Route, NavLink } from 'react-router-dom';
import style from './style.module.css';
import About from './about/about';
import CatWorld from './catWorld/catWorld';
import Nudes from './nudes/nudes';

function Header() {
    return (
        <>
            <div className={style.main}>
                <div>
                    <NavLink to='/about'>О нас</NavLink>
                </div>
                <div>
                    <NavLink to='/catWorld'>Мир котиков</NavLink>
                </div>
                <div>
                    <NavLink to='/nudes'>Фото в ванной</NavLink>
                </div>
            </div>

            <Routes>
                <Route exact path='about' element={<About />} />
                <Route exact path='catWorld' element={<CatWorld />} />
                <Route exact path='nudes' element={<Nudes/>} />
            </Routes>
        </>
    );
}

export default Header