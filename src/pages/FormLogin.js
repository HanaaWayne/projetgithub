import React from "react";

import React from "react";
import { useNavigate } from 'react-router-dom';
import InputText from "../../commun/InputText";
import axios from "axios";

const FormLogin = () =>{

    const [ email, setEmail] = React.useState("")
    const [ mdp, setMdp] = React.useState("")
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
  
          const user = {
              email,
              mdp 
          }
  
          try {
              const response = await axios.post('https://api-dev.akov-developpement.fr/api/users/login', user)
          localStorage.setItem("user", JSON.stringify(response.data))
          if(response.data.role === "ADMIN"){
              navigate("/admin")
          }else {
              navigate('/produits');
          }
  
          }catch (error) {
          alert("erreur");
        }
      };
  

    return(
        <>
         <form className="col-4 ms-5 form-login" onSubmit={handleLogin}>
            <div className="d-flex flex-column align-items-center"> 
                <h3 className="text-light mt-3">Connexion</h3>
                <InputText label="Email" type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                <InputText label="Mot de passe" type="password" name="mdp"  onChange={(e) => setMdp(e.target.value)}/>
                <button type="submit" className="btn btn-light">Valider</button>
            </div>
        </form>
        </>
    )
}

export default FormLogin