import axios from "axios";
import React, { useEffect }  from "react";

const Postaxios = () => {

    useEffect(() => {
        axios.post('https://reqres.in/api/users/2',
            {
                "name": "morpheus",
                "job": "zion resident"
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

export default Postaxios