import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"

export const Navbar = () => {
    const [user]= useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    };
    return (
    <div className="navbar">
        <div className="links">
           <Link to="/" className="home">Home</Link>
           <Link  to="/about" className="about">About</Link>
           {! user ?(
            <Link to="/login" className="login">Login</Link>
            ) : (
           <Link to="/post" className="createpost">Create Post</Link>
        )}
        
        </div>
        <div className="user">
            
            {user && (
                <>
                
                  <img src={user?.photoURL || ""} />
                  
                <div className="usernameandbutton">
                <p>{user?.displayName}</p>
                 <button onClick={signUserOut}>Log Out</button>
                </div>
                
                
                </>
            )}
            
        </div>   
    </div>
    );
};