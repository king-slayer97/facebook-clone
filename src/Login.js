import React from 'react'
import './Login.css'
import { fb_url } from './const';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import {useDispatch} from 'react-redux';
import {actionTypes} from './reducer';

function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        //sign in...
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({type: actionTypes.SET_USER,user:result.user.displayName,dp:result.user.photoURL});
            })
            .catch((error) => alert(error.message))
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img
                    src={fb_url}
                    alt=""
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login;
