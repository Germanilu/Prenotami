
import './index.scss';
import logo from '../../media/LOGO.jpg'
import {useNavigate} from 'react-router-dom';

function Header() {

const navigate = useNavigate();


return(
    <div className="header-design">
        <div className="header">
            <img src={logo} alt="Logo" className='logo'  onClick={() => navigate('/')}/>
            <p onClick={() => navigate('/')}>Inizio</p>
            <a href='#howWork'>Come funziona</a>
            <p onClick={() => navigate('/reserve')}>Richiedi il servizio</p>
            <a href='#price'>Prezzo</a>
        </div>
    </div>
    )
}


export default Header;