import './index.scss';
import {useNavigate} from 'react-router-dom';

const ChooseService = () => {

    const navigate = useNavigate();


    return(
        <div className="choose-service-design">
            <h1>Scegli un servizio</h1>
            <div className="service-button-container">

            <div className='reserve-button' onClick={() => navigate('/reserve')}>Passaporto</div>
            <div className='reserve-button' onClick={() => navigate('/reserve')}>CIE</div>
            </div>

        </div>
    )
}

export default ChooseService;