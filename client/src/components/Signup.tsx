import React from "react";
// import { useForm } from 'react-hook-form'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import axios from "axios"

// type Profile = {
//     name: string
//     email: string
//     phone: number
//     password: string
//     passwordConfirmation: string
// }


const Signup = () => {
    //     const { register, handleSubmit, errors } = useForm() < Profile >

    //     const onSubmit = handleSubmit((data) => {
    //         alert(JSON.stringify(data))
    //     })

    // send a POST request



    return (
        // <form onSubmit={onSubmit}>
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h5 text-center mb-4">Sign up</p>
                        <div className="grey-text">

                            <MDBInput htmlFor="name" label="Your name" icon="user" group type="string" validate />


                            <MDBInput htmlFor="email" label="Your email" icon="envelope" group type="email" validate />


                            <MDBInput htmlFor="phone" label="Your phone no" icon="phone-alt" group type="number" validate />


                            <MDBInput htmlFor="password" label="Your password" icon="lock" group type="password" validate />


                            <MDBInput htmlFor="password" label="Confirm your password" icon="lock" group type="text" validate />

                        </div>
                        <div className="text-center">
                            <MDBBtn color="primary" type="submit">Sign up</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        // </form>
    );
};

export default Signup;

// import React from "react";
// import { useForm } from 'react-hook-form'
// // import "./App.css";

// type Profile = {
//     name: string
//     email: string
//     password: string
//     passwordConfirmation: string
// }

// export const Signup = () => {
//     const { register, handleSubmit, errors } = useForm<Profile>()

//     const onSubmit = handleSubmit((data) => {
//         alert(JSON.stringify(data))
//     })

//     return (
//         <main>
//             <form onSubmit={onSubmit}>
//                 <div>
//                     <label htmlFor="name" > User Name </label>
//                     <input ref={register({ required: true })} id="name" name="name" type="text" />
//                     {
//                         errors.name && <div className="error"> Enter your name </div>
//                     }
//                 </div>
//                 <div>
//                     <label htmlFor="email"> Email </label>
//                     <input ref={register({ required: true })} id="email" name="email" type="email" />
//                     {
//                         errors.email && <div className="error"> Enter your email </div>
//                     }
//                 </div>
//                 <div>
//                     <label htmlFor="phoneNo"> Phone No. </label>
//                     <input ref={register({ required: true })} id="phoneNo" name="phoneNo" type="number" />
//                     {
//                         errors.email && <div className="error"> Enter your email </div>
//                     }
//                 </div>

//                 <div>
//                     <label htmlFor="password" > Password </label>
//                     <input ref={register({ required: true })} id="password" name="password" type="text" />
//                     {
//                         errors.password && <div className="error"> Enter your Password</div>
//                     }
//                 </div>

//                 <div>
//                     <label htmlFor="passwordConfirmation" > Password Confirmation </label>
//                     <input ref={register({ required: true })} id="passwordConfirmation" name="passwordConfirmation" type="text" />
//                     {
//                         errors.passwordConfirmation && <div className="error"> Confirm your Password</ div >
//                     }
//                 </div>
//                 < button type="submit"> Signup </button>
//             </form>
//         </main>
//     );
// }

// export default Signup;
