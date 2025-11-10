import { useState } from "react";
import "@styles/Login.scss";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if(username==="admin" && password==="admin"){
            console.log("Login OK");
            localStorage.setItem("isLoggedIn", "true");
            navigate("/actividades")
        }else{
            console.log("Login incorrecto")
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Iniciar Sesión</h2>
                <label htmlFor="username">Usuario</label>
                <input
                    id="username"
                    type="text" 
                    placeholder="Usuario" 
                    onChange={(e) => setUsername(e.target.value)} 
                    value={username}
                    minLength={3}
                    required />
                
                <label htmlFor="password">Contraseña</label>
                <input 
                    id="password"
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                    minLength={4}
                    required />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
}

export default Login;