import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { appendErrors, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addRole } from '../../actions/Users/usersActions';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
const axios = require('axios');

interface FormData {
    name: string;
    city: string;
    phone: number;
    provider: string,
    role: any,
    picture: any,
    category: any
}

interface SelectCity {
    pk: any,
    name: any,
}
const sCity: SelectCity = {
    pk: null,
    name: null
}


interface SelectCategory {
    pk: any,
    catName: any,
}
const sCategory: SelectCategory = {
    pk: null,
    catName: null
}
const ProviderSignup = () => {
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    // const { handleSubmit, errors,register } = useForm<FormData>();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);

    const { register, handleSubmit } = useForm<FormData>({
        defaultValues: {
            picture: "null"
        }
    })
    const [test, setTest] = useState([]); // don't detete 

    const [category, setCategory] = useState([]);
    const [selectCategory, setSelectCategory] = useState(sCategory);

    const [city, setCity] = useState();
    const [selectCity, setSelectCity] = useState(sCity);
    useEffect(() => {
        axios.get(`http://localhost:8000/location/city/`)
            .then((result: any) => {
                console.log("loc", result)
                setCity(result.data.map((d: { pk: any; name: any; }) => ({
                    "value": d.pk,
                    "label": d.name

                })))
            })
            .catch((err: any) => {
                console.error("err===== =>", err);
            })

        axios.get(`http://localhost:8000/category/just`)
            .then((result: any) => {
                console.log("cat", result)
                setCategory(result.data.map((d: { pk: any; catName: any; }) => ({
                    "value": d.pk,
                    "label": d.catName
                })))
            })
            .catch((err: any) => {
                console.error("err===== =>", err);
            })
 
    },[test])
    console.log("selectCity", selectCity)
    console.log("selectCategory", selectCategory)
    

    return (
        <div id="signup" className="center styled">
            <form id="signup-form"
                onSubmit={handleSubmit((formData) => {
                    console.log(formData)

                    axios.post(`http://localhost:8000/serviceprovider/`, {
                        categoryId: selectCategory.pk,
                        phone: formData.phone,
                        city: selectCity.pk,
                        provider: userInStore.user.id,
                        // role: "ServiceProvider",
                        picture: formData.picture
        
                    })

                        .then((result: any) => {
                            console.log("axios",result)
                            dispatch(addRole(result.data.role)) 
                            if(result.status === 201){
                                window.location.href = "/";

                            }

                        })
                        .catch((err: any) => {
                            console.error("err===== =>", err);
                        })

                })}
            >
                <h1>Provider Sign Up</h1>
                <br />
                <div className="column">
                    {/* <label htmlFor="name">Name:</label>
                    <input type="text" className="text" id="name" name="name" ref={register({ required: "required" })} />
                    <div className="name error" ></div> */}

                    <label htmlFor="email" >Category:</label>
                    {/* <select className="dropdown-cat" onChange={(e) => { setCategory(e.target.value) }}>
                        <option>Electrician</option>
                        <option>Plumber</option>
                        <option>Carpenter</option>
                    </select> */}
                    <Select
                        value={selectCategory}
                        options={category}
                        onChange={(e: { value: any; label: any; }) => { setSelectCategory({ pk: e.value, catName: e.label }) }}
                    />
                    

                    <label htmlFor="phone" >Phone:</label>
                    <input type="text" className="text" id="phone" name="phone" ref={register({ required: "required" })} />
                    <div className="phone error" ></div>

                    <label htmlFor="city" >City:</label>
                    {/* <select className="dropdown-city" onChange={(e) => { setCity(e.target.value) }}>
                        <option>Ramallah</option>
                        <option>Nablus</option>
                        <option>Hebron</option>
                        <option>Jenin</option>
                        <option>Tulkarem</option>
                        <option>Jericho</option>
                    </select> */}
                    <Select
                        value={selectCity}
                        options={city}
                        onChange={(e: { value: any; label: any; }) => { setSelectCity({pk:e.value, name:e.label}) }}
                    />

                    <label htmlFor="picture">Picture:</label>
                    <input type="text" className="picture" id="picture" name="picture" ref={register} />
                    <div className="name error" ></div>

                    {/* <label htmlFor="password" >Password:</label>
                    <input type="password" className="text" id="password" name="password" ref={register({ required: "required" })} />

                    <label htmlFor="re_password" >Confirm Password:</label>
                    <input type="password" className="text" id="re_password" name="re_password" ref={register({ required: "required" })} />
                    <div className="password error" ></div> */}
                </div>
                <br />

                {/* <div className="password-req" >8 characters or longer. Combine upper and lowercase letters and numbers</div><br /> */}
                <p >Already have an account? <Link to="/user/login" style={{ textDecoration: "none" }}>Sign In</Link></p>
                <button className="button" >Sign Up</button><br />

            </form>
        </div>
    );
}

export default ProviderSignup;



// export default function Provider() {
//     const { register, handleSubmit, errors } = useForm<FormData>();
//     const [submitting, setSubmitting] = useState<boolean>(false);
//     const [serverErrors, setServerErrors] = useState<Array<string>>([]);
//     const [title, setTitle] = useState('');
//     console.log("title", title)

//     return <form 
//         onSubmit={handleSubmit((FormData) => {
//             setSubmitting(true);
//             setServerErrors([]);

//             // console.log(FormData, "FormData");

//             // const response = fetch('http://localhost:3000/servize', {
//             //     method: "POST",
//             //     headers: {
//             //         "Content-Type": "application/json",
//             //     },
//             //     body: JSON.stringify({
//             //         name: FormData.name,
//             //         email: FormData.email,
//             //         password: FormData.password,
//             //         Phone: FormData.phone,
//             //         city: FormData.city,
//             //         terms: FormData.terms,
//             //     }),
//             // });
//             // const data = await response.json();
//             // console.log(data, "server data");

//             // setSubmitting(false);
//         })} 
//         >
//         <p className="h5 text-center mb-4">Register Providers</p>
//         <div className="grey-text"></div>

//         <MDBContainer>
//             <MDBRow>
//                 <MDBCol md="6">

//                     <div>
//                         <label htmlFor="name">Name</label>
//                         <MDBInput name="name" id="name" group type="text" validate onChange={(e: any) => setTitle(e.target.value)} />
//                         {errors.name ? <div>{errors.name.message}</div> : null}
//                     </div>

//                     <div>
//                         <label htmlFor="email" >Email</label>
//                         <MDBInput name="email" id="email" group type="email" validate />
//                         {errors.email ? <div>{errors.email.message}</div> : null}
//                     </div>

//                     <div>
//                         <label htmlFor="password">Password</label>
//                         <MDBInput name="password" id="password" group type="password" validate />
//                         {errors.password ? <div>{errors.password.message}</div> : null}
//                     </div>

//                     <div>
//                         <label htmlFor="phone">Phone-no</label>
//                         <MDBInput name="phone" id="phone" group type="phone" validate />
//                         {errors.phone ? <div>{errors.phone.message}</div> : null}
//                     </div>

//                     <div>
//                         <label htmlFor="city">City</label>
//                         <MDBInput name="city" id="city" group type="text" validate />
//                         {errors.city ? <div>{errors.city.message}</div> : null}
//                     </div>

//                     <div>
//                         <label htmlFor="terms">You must agree our terms</label>
//                         <MDBInput group type="checkbox" name="terms" id="terms" validate />
//                         {errors.terms ? <div>{errors.terms.message}</div> : null}
//                     </div>
//                     <br></br>
//                     <br></br>

//                     <div className="text-center">
//                         <MDBBtn type="submit" disabled={submitting}>Register</MDBBtn>
//                     </div>

//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer>
//     </form>;
// }

