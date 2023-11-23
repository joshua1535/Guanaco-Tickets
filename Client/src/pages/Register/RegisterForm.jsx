import logo from '../../assets/logo.png';
import './RegisterForm.module.css';
import classes from './RegisterForm.module.css';
import imgtemplate from '../../assets/loginimg.jpg';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useUserContext } from '../../Context/userContext'

const RegisterForm = () => {

    const navigate = useNavigate();

    const { signup } = useUserContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);

    const onChange = (e, save) => {
        save(e.target.value);
    }

    const onSubmitHandler = async (e) => {

        e.preventDefault();

        const registered = await signup(email, password, "https://pbs.twimg.com/media/FHAsufPX0Agj5Wg?format=jpg&name=large");

        setError(!registered);
    
        if(registered) {
            //navigate('/emailregister');
            navigate('/');
        }

        setEmail("");
        setPassword("");

    }

    return (
        <div className={classes["generalContainer"]}>
            <form onSubmit={onSubmitHandler}>
                <div className={classes["inputsContainer"]} >
                    <img className= {classes["logoImg"]} src={logo} />
                    <h1 className={classes["logintitle"]}>Guanaco Business</h1>
                    <h1 className={classes["logintitle2"]}>Registrate</h1>
                    <div className={classes["inputemailContainer"]}>
                        <p className={classes["inputemailTitle"]} > Correo electronico</p>
                        <input className={classes["inputformat"]} 
                            type="text" 
                            value={email} 
                            placeholder="Ej. danyfifitax@gmail.com"
                            onChange={(e) => onChange(e, setEmail)}
                            />
                    </div>
                    <div className={classes["inputpasswordContainer"]}>
                        <p className={classes["inputpasswordTitle"]} > Contraseña</p>
                        <input className={classes["inputformat"]} 
                        type="password" 
                        value={password}
                        placeholder="*****************" 
                        onChange={(e) => onChange(e, setPassword)}
                        />
                    </div>

                    <div className={classes["loginContainer"]}>

                    <button type="submit" className={classes["buttonlogin"]}>
                        Crear cuenta
                    </button>        

                    </div>
                </div>
            </form>

            <div className={classes["imgContainer"]} >
            <img className={classes["imgtemplate"]} src={imgtemplate} /></div>
            </div>
        
    )
}

    export default RegisterForm;
