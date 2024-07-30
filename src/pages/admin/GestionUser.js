import React from "react";
import { useEffect, useState } from "react"
import api from "../../api/Api";
import "./GestionUsers.css"
import image from "../../assets/1.jpg"

const GestionUsers = () => {

    const [ users, setUsers] = useState([])

    const getUsers = async () => {
        api.post("/api/users/all")
        .then(response => {
            setUsers(response.data)
        })
          .catch(function (error) {
            console.log(error);
          });
      }
  
    useEffect(() => {
        getUsers();
    }, []);


    return(
        <div className="contain-users">
            <div className="contain-content-users">
                <table className="">
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> Photo </th>
                        <th> Nom </th>
                        <th> Prenom </th>
                        <th> Adresse email </th>
                        <th> Rôle </th>
                    </tr>
                </thead>
                <tbody>
                        {users.map(user => (
                             <tr>
                            <td>{user.id}</td>
                            <td><img src={user.image ? user.image : image} alt={user.nom} className="image-user"/></td>
                            <td>{user.nom}</td>
                            <td>{user.prenom}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            </tr>
                        ))}
                      
                        </tbody>
                </table>
        </div>
        </div>
    )
}


export default GestionUsers