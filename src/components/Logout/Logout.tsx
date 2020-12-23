import React from 'react';
import Button from '@material-ui/core/Button';


function Logout() {
    return (
        <div >
            <div>
            
                <Button onClick={() => {
                     localStorage.clear();
                        window.location.href = '/'
                    }} id="logout">Logout</Button>
               
            </div>
        </div>
    );

}


export default Logout;