import logo from '../../../assets/logo.png';
import classes from './UpdatePasswordForm.module.css';
import imgtemplate from '../../../assets/loginimg.png';


const UpdatePasswordForm = () => {
    return (
        <div className={classes["generalContainer"]}>
            <div className={classes["inputsContainer"]} >
            <img className= {classes["logoImg"]} src={logo} />
            <h1 className={classes["logintitle"]}>Guanaco Business</h1>
            <h1 className={classes["infotext"]}>
            Debe contener entre 8 y 20 caracteres, 
            y debe incluir al menos un número (0-9), 
            mayúscula y caracter especial (_?!-)
                </h1>
            <div className={classes["inputemailContainer"]}>
                <p className={classes["inputemailTitle"]} > Nueva Contraseña</p>
                <input className={classes["inputformat"]} type="text" placeholder="Correo electronico" />
                <p className={classes["inputemailTitle"]} > Vuelve a escribir la contraseña</p>
                <input className={classes["inputformat"]} type="text" placeholder="Correo electronico" />
            </div>

           <div className={classes["loginContainer"]}>

           <button className={classes["buttonlogin"]}>
                Actualizar Contraseña
            </button>        

            </div>
            </div>

            <div className={classes["imgContainer"]} >
            <img className={classes["imgtemplate"]} src={imgtemplate} /></div>
             </div>
        

    )
}

    export default UpdatePasswordForm;
