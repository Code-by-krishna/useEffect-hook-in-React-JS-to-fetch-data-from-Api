import axios from "axios";
import React, { useEffect }  from "react";

const Deleteaxios = () => {

    useEffect(() => {
        axios.delete('https://reqres.in/api/users/2'   
        )
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },[])
    return (
        <div>
           <h1>Post request in React with axios</h1>
        </div>
    )
}

export default Deleteaxios