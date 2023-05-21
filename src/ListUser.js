
import axios from "axios";
import React,  { useEffect ,useState } from "react";
function ListUser(){

    let [users,setUsers]= useState([]);

    useEffect(()=>{
        axios.get("https://reqres.in/api/users").then(
            (response)=>{
            console.log(response.data);
                setUsers(response.data.data);
            }
        )
    })
    return(
        <div>
        <div>List user</div>
        <table>
            <thead>
                    <tr>
                        <th>no</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                    <img src={user.avatar} /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


 
export default ListUser;