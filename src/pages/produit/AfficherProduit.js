import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import image from "../../assets/1.jpg"

const AfficherProduit = () =>{
    const [ produits, setProduits] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('https://api-dev.akov-developpement.fr/api/produit/all');
                setProduits(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des produits: ", error);
            }
        };

        fetchData();
    }, []);


    const pageProduit = (id) =>{
        navigate(`/produits/produit/${id}`)
    }

    return(
        <div className="row mt-5">
        {produits.map((produit) => (
            <div className="col-3 d-flex justify-content-center" key={produit.id}>
                <div className="contain mt-4"  onClick={()=>pageProduit(produit.id)} >
                    <img className="image" src={produit.image ? produit.image : image} alt={produit.nom}/>
                    <div className="text-light fw-bold mt-2 text-center"> 
                        <p>{produit.nom}</p>
                    </div>
                    {/* <div className="d-flex justify-content-between align-items-center ms-5 me-5"> */}
                    <div className="ms-3">
                        <div className="text-light mt-2">
                            <p>{produit.prix}€</p> 
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default AfficherProduit

// if (url && url.startsWith("C:\\fakepath\\")