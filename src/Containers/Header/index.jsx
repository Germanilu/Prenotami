
import './index.scss';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

function Header() {

const navigate = useNavigate();
const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
const [menu_class, setMenuClass] = useState("menu hidden");
const [isMenuClicked, setIsMenuClicked] = useState(false);

const updateMenu = () =>{
    if(!isMenuClicked) {
        setBurgerClass("burger-bar clicked")
        setMenuClass("menu visible")
    }
    else {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
}


return(
    <div className="header-design">
        <nav>
            <div className='burger-menu' onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
            </div>
        </nav>
        <div className={menu_class}>
            <div className="menu-container">
                <p onClick={() =>{ navigate('/'); updateMenu()}}>Inizio</p>
                <a href='#howWork' onClick={() => { navigate('/'); updateMenu()}}>Come funziona</a>
                <p onClick={() => {navigate('/choose-service');updateMenu()}}>Richiedi il servizio</p>
                <a href='#price'  onClick={() => { navigate('/'); updateMenu()}}>Prezzo</a>
            </div>
        </div>
    </div>
)
}


export default Header;