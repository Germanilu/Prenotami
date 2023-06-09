import React                            from "react";
import { useForm, ValidationError }     from "@formspree/react";
import "./Form.scss";

function PassportForm() {
  const [state, handleSubmit] = useForm("mjvdajlw");

  return (
    <>
      {!state.succeeded ? (
        <div className="form-design">
          <h1>Completa il formulario richiesto</h1>
          <p>Compila i dati richiesti con il tuo nome, l'email e la password del tuo account prenot@mi </p>
          <p>e un numero di telefono se desideri ricevere le notifiche tramite whatsapp</p>
          <h3>Richiesta Passaporto</h3>
          <form onSubmit={handleSubmit} className="form">
            <div className="field">
              <label htmlFor="name">Nome</label>
              <input id="name" type="text" name="name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="field">
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input id="email" type="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="field">
              <label htmlFor="password">
                Password <span>*</span>
              </label>
              <input id="password" type="text" name="password" />
              <ValidationError
                prefix="password"
                field="password"
                errors={state.errors}
              />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">
                Whatsapp <span className="field-description">(Se vuoi essere contattato tramite app)</span> 
              </label>
              <input id="whatsapp" type="text" name="whatsapp" />
              <ValidationError
                prefix="whatsapp"
                field="whatsapp"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="submit-form-button"
            >
              Invia
            </button>
          </form>
          <div className="form-description">
            <p>
              <span>*</span> Questo campo è obbligatorio
            </p>
            <p>
              Ti ricordiamo che il tempo di attesa medio è di 5-10 giorni
              lavorativi
            </p>
            <p>
              Riceverai un'email di conferma all'indirizzo email specificato nel
              formulario
            </p>
          </div>
        </div>
      ) : (
        <div className="form-design">
            <p className="success-message">Grazie, Abbiamo ricevuto la tua richiesta!</p>
        </div>
      )
      
      }
    </>
  );
}

export default PassportForm

