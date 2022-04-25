import React from 'react';
import './Input.css';

function Input(){
    return(
        <div>
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>
                <div className="input-container ic1">
                    <input id="firstname" className="input" type="text" placeholder=" "/>
                    <div className="cut"></div>
                    <label htmlFor="firstname" className="placeholder">First name</label>
                </div>
                <div className="input-container ic2">
                    <input id="lastname" className="input" type="text" placeholder=" "/>
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">Last name</label>
                </div>
                <div className="input-container ic2">
                    <input id="email" className="input" type="text" placeholder=" "/>
                    <div className="cut cut-short"> </div>
                    <label htmlFor="email" className="placeholder">Email</>
                </div>
                <button type="text" className="submit">submit</button>
            </div>
        </div>
    )
}

export default Input ;