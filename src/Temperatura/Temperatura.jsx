import React, {useState} from "react";

const Temperatura= () => {

    const [Temperatura, setTemperatura] = useState(19)
    const Subir = () =>{
        setTemperatura(Temperatura+1)
    } 
    const Bajar = () =>{
        setTemperatura(Temperatura-1)
    } 
    return(
        <div>
<h2>La temperatura es: {Temperatura}</h2>
<p> 
    {
        Temperatura > 21 ? " Pero como puede hacer tanto CaLOoOOoOOoR" : "Team Frio Forever"
    }
</p>
<button onClick={Subir}>Aumentar temperatura</button>
<button onClick={Bajar}>Reducir temperatura</button>


        </div>
    )

}
export default Temperatura