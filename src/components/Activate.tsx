import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
const axios = require('axios');

const Activate = () => {
    const [verified, setVerified] = useState(false);

    const verify_account = (e:any) => {
        // e.preventDefault();
        // const uid = props.match.params.uid;
        // const token = props.match.params.token;

        // props.verify(uid, token);
        // setVerified(true);
        const url = window.location.href;
        const index= url.lastIndexOf("/");
        const uid = url.slice(index+1);
        const token = url.slice(index-2,index);
        console.log(uid, token )

        let options = {
            url: `http://localhost:8000/auth/users/activation/`,
            method: 'post',
            data: { Uid: uid, Token: token }
        }

        axios(options)
            .then((results: any) => {
                console.log("axios", results);

            })
            .catch((err: any) => {
                console.error("err===== =>", err);
            })
    };

    if (verified)
        return <Redirect to='/' />

    return (
        <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '200px' }}>
                <h1>Verify your Account:</h1>
                <button
                    onClick={verify_account}
                    style={{ marginTop: '50px' }}
                    type="button"
                    className="btn btn-primary"
                >
                    Verify
                </button>
            </div>
        </div>
    );
};

export default Activate;