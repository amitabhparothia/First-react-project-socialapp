import { async } from "@firebase/util";
import {auth ,provider } from "../config/firebase"
import{signInWithPopup} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const navigte = useNavigate();

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, provider);
        }catch(err)
        {
            console.error(err);
        }; 
        
        navigte("/");
    }
    return(
     <div>
        <p>Login with google to continue</p>
        <button onClick={signInWithGoogle}>Login with google</button>
    </div>
    )
};