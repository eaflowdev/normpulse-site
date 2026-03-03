import "./Login.css";
import Button from "../../package/Atom/Button/Button";
import TextField from "../../package/Molecule/Textfield/TextField";

export default function Login() {
  return (
    <div className="login">
      <section className="login-hero">
        <h1>Connexion</h1>
        <p>Accédez à votre espace personnel</p>
      </section>

      <section className="login-form-section">
        <div className="login-card">
          <form className="login-form">
            <TextField
              placeholder="Entrer votre email"
              label="Email"
              required
            />

            <TextField
              placeholder="Entrer votre mot de passe"
              label="Mot de passe"
              isPassword
              required
            />

            <Button variant="secondary">Se connecter</Button>
          </form>
        </div>
      </section>
    </div>
  );
}