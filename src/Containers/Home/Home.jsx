
import './Home.scss'
import {useNavigate} from 'react-router-dom';
import BackToTop from '../Back-to-top';
import React, {useState} from 'react';
import ReviewForm from '../../Components/Review/index';



function Home() {

 const [isVisible,setIsVisible] = useState(false);
  const navigate = useNavigate();
  

  const toggleIsVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if(scrolled > 100){
      setIsVisible(true)
    } else if (scrolled <= 100){
      setIsVisible(false)
    }
  }

  window.addEventListener('scroll', toggleIsVisible);
 
  return (
    <div className='home-design' id='home'>
      <div className='title-box'>
        <h2 className='box-title'>Prenota un'appuntamento </h2>
        <h2 className='box-title-second-row'>Presso il tuo consolato</h2>
        <div className='action-box'>
          <div className='reserve-button'  onClick={() => navigate('/choose-service')}>Richiedi il servizio</div>
          <a className='information-button' href='#howork'>Come funziona</a>
        </div>
      </div>
      <div className='service-status'>
        <div className='led led-animation'></div>
        <p>Status:</p>
        <span>ATTIVO</span>
      </div>


      <div  className='information-box'>
        <h3 id='howWork' >Come funziona?</h3>
          <div className='information-box-text'>
          <p>Questo sito nasce per risolvere una delle problematiche che tutti noi espatriati dobbiamo affrontare ogni volta che vogliamo rinnovare i nostri documenti.</p>
          <p>Purtroppo è sempre più difficile riuscire a richiedere un'appuntamento sul sito del consolato a causa dei pochi appuntamenti che vengono messi a disposizione ogni giorno.</p>
          <p>Basterà fornire i dati di accesso al sito Prenot@mi. Email e password. <span>Se vuoi sapere come cambiare la tua password clicca qui: <span> <a href="https://prenotami.esteri.it/Manuale/ManualeCittadino.docx">Manuale del Cittadino</a> </span></span> </p>
          <p>Una volta ricevuti i dati di accesso inizieremo la ricerca e verrai notificato tramite il metodo di contatto da te scelto. Il tempo previsto per l'effettiva prenotazione in media può variare tra i <span> 5-10 giorni lavorativi</span></p>
          <p></p>
          <p>Con questo servizio ci auguriamo di poterti aiutare con la ricerca degli appuntamenti e liberare il tuo prezioso tempo per evitare di ripetere sempre la stessa azione e ottenere sempre la risposta "non ci sono appuntamenti disponibili in questo momento"</p>  
          </div>
      </div>
{/* 
      <div className="review-box">
        <ReviewForm />
      </div> */}


      <div className='price-request-box'>
        <div className='price-box' id='price'>
          <h2>Costo del Servizio</h2>
        <p><span>Il costo del servizio pari a 25€</span> verrà effettuato dal richiedente una volta che la prenotazione verrà effettuata correttamente</p>
        <p> <span>Metodo di pagamento:</span>  Paypal, Bizum, Crypto</p>
        </div>

        <div className='request-box'>
          <h2>Richiedi il servizio</h2>
          <div className='reserve-button' onClick={() => navigate('/choose-service')}>Richiedi il servizio</div>
          <p>Ti ricordiamo che il tempo di attesa stimato per l'effettiva prenotazione e pari a 5-10 giorni lavorativi</p>
        </div>
      </div>
      {
      isVisible ? <BackToTop></BackToTop>:''
      }
    </div>
  );
}

export default Home;