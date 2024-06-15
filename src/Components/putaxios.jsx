import axios from "axios";
import React, { useEffect }  from "react";

const Putaxios = () => {

    useEffect(() => {
        axios.put('https://reqres.in/api/users/2',
            {
                "name": "Amit",
                "job": "Software Developer"
            }    
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

export default Putaxios