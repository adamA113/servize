import { closeForgotForm, closeLoginForm, closeSignupForm } from '../../actions/Users/usersActions';

const Overlay = () => {
    return (
        <div className="overlay" onClick={() => { closeSignupForm(); closeLoginForm(); closeForgotForm(); }}></div>
    );
}

export default Overlay;