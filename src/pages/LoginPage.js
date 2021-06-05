import '../styles/LoginForm.css';

const LoginPage = () => {
    return ( 
        <form className="login__form">
            <label htmlFor="login">Podaj login<input type="text" id="login" className="login__input"/></label>
            <label htmlFor="password">Podaj hasło<input type="password" id="password" className="login__input"/></label>
            <button className="login__button">Zaloguj</button>
        </form>
    );
}
 
export default LoginPage;