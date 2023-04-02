
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
            <p>Come funziona</p>
            <p onClick={() => navigate('/reserve')}>Richiedi il servizio</p>
            <p>Prezzo</p>
        </div>
    </div>
    )
}


export default Header;