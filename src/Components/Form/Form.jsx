import React from "react";
import "./Form.scss";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mjvdajlw");
 
  return (
    <>
      {!state.succeeded ? (
        <div className="form-design">
          <h1>Completa il formulario richiesto</h1>
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
              <label htmlFor="Telegram">
                Telegram (Se vuoi essere contattato tramite app)
              </label>
              <input id="Telegram" type="text" name="Telegram" />
              <ValidationError
                prefix="Telegram"
                field="Telegram"
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
function App() {
  return <ContactForm />;
}
export default App;
