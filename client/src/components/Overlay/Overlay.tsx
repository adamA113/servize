import { signUp, openLoginForm, closeSignupForm } from '../../actions/Users/usersActions';
 
const Overlay = () => {
    return ( 
        <div className="overlay" onClick={closeSignupForm}></div>
     );
}
 
export default Overlay;