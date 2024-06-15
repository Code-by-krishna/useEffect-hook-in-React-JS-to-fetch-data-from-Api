import React, { useEffect, useState } from "react";
import axios from "axios";

const Getaxios = () => {
    const [value,setValue] = useState([])
     
    useEffect(() => {
       axios.get('https://reqres.in/api/users?page=2')
       .then(res => setValue(res.data.data))
       .catch(err => console.log(err))
    },[])
    console.log(value)
    return (
        <>
       <h1>Api call with axios in react.</h1>
        {
            value.map((data) => {
                return <p>Id = {data.id},Email = {data.email}</p>
            })
        }
       </>
    )
}

export default Getaxios