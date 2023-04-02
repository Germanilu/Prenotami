
import './Home.scss'
import {useNavigate} from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  return (
    <div className='home-design'>
      <div className='title-box'>
        <h2 className='box-title'>Prenota un'appuntamento </h2>
        <h2 className='box-title-second-row'>Presso il tuo consolato</h2>
        <div className='action-box'>
          <div className='reserve-button'  onClick={() => navigate('/reserve')}>Richiedi il servizio</div>
          <p className='information-button'>Come funziona</p>
        </div>
      </div>
      
      <div>
        <h3>Come funziona?</h3>
        <p>Questo sito nasce per risolvere una delle problematiche che tutti noi espatriati dobbiamo affrontare ogni volta che vogliamo rinnovare i nostri documenti</p>
        <p>Purtroppo è sempre più difficile riuscire a richiedere un'appuntamento sul sito del consolato a causa dei pochi appuntamenti che vengono messi a disposizione ogni giorno.</p>
        <p>Questo servizio ha lo scopo di richiedere una prenotazione per il rinnovo della CIE o del passaporto presso il consolato</p>
      </div>

      <p>Basterà fornire i dati di accesso al sito Prenot@mi. Email e password. Se vuoi sapere come cambiare la tua password clicca QUI. Una volta ricevuti i dati di accesso inizieremo la ricerca e verrai notificato tramite il metodo di contatto da te scelto</p>
      <p>Con questo servizio ci auguriamo di poterti aiutare con la ricerca degli appuntamenti e liberare il tuo prezioso tempo per evitare di ripetere sempre la stessa azione e ottenere sempre la risposta "non ci sono appuntamenti disponibili in questo momento"</p>
      <p>Il costo del servizio pari a 25€ verrà effettuato dal richiedente una volta che la prenotazione verrà effettuata correttamente</p>
      <p>Metodo di pagamento: Paypal, Bizum, Crypto</p>

      <div className='reserve-button' onClick={() => navigate('/reserve')}>Richiedi il servizio</div>
    </div>
  );
}

export default Home;