import React from "react";
import InputText from "../../commun/InputText";
import axios from "axios";

const FormSaveUser = () =>{

    const [nom, setNom] = React.useState("")
    const [prenom, setPrenom] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [mdp, setMdp] = React.useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const user = {
            nom,
            prenom,
            email,
            mdp
        }
        console.log(user)

        try{
            const response = await axios.post('https://api-dev.akov-developpement.fr/api/users/save', user);

            alert("Enregistrement reussi");

            console.log(response)
        }catch (e) {
            alert(e.response.data.message)
        }
    }

    return(
        <form className="col-4 me-5 form-save-user" onSubmit={handleSubmit}>
            <div className="d-flex flex-column align-items-center">
            <h3 className="text-light mt-3">Créer un compte</h3>
            <InputText label="Nom" type="text" name="nom" onChange={(event) => setNom(event.target.value)} />
            <InputText label="Prénom" type="text" name="prenom" onChange={(event) => setPrenom(event.target.value)}/>
            <InputText label="Email" type="email" name="email" onChange={(event) => setEmail(event.target.value)}/>
            <InputText label="Mot de passe" type="password" name="mdp" onChange={(event) => setMdp(event.target.value)}/>
            <button type="submit" className="btn btn-light mb-3">Enregistrer</button>
            </div>
        </form>
    )
}

export default FormSaveUser