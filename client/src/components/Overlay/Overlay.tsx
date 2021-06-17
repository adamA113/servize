import { signUp, closeLoginForm, closeSignupForm } from '../../actions/Users/usersActions';

const Overlay = () => {
    return (
        <div className="overlay" onClick={() => { closeSignupForm(); closeLoginForm(); }}></div>
    );
}

export default Overlay;