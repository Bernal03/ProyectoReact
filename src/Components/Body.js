import React from 'react';
import './Body.css';
import { Alert, Button } from 'react-bootstrap';

function Body(props){

        
    const mensaje=()=>{
        console.log("Holi")
        return alert("Hola mundo.\n Pd. no pude centrar el header:(, porque toi chiquito")



    return(
        <div className="Body">
            
            <h2>{props.texto1}</h2>
            {
                props.temas.map((e,index)=>
                <p key={index}>{e}</p>
                )
            }

        <Button onClick={()=>mensaje()}>Click aqui cambiado equisde</Button>
        </div>
    )
}

export default Body;