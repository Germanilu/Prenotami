import './index.scss';
import {useNavigate} from 'react-router-dom';

const ChooseService = () => {

const navigate = useNavigate();

    return(
        <div className="choose-service-design">
            <h1>Scegli il tipo di servizio</h1>
            <p>Noi ci occuperemo di prenotare l'appuntamento presso il consolato</p>
            <div className="service-button-container">
            <div className='reserve-button' onClick={() => navigate('/reserve-passport')}> Passaporto</div>
            <div className='reserve-button' onClick={() => navigate('/reserve-cie')}> Carta d'Identità</div>
                </div>
            </div>
    )
}

export default ChooseService;