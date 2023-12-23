import { useState } from "react";

const Card=(props)=>{

    console.log(props);
    const [valuesHours,setvaluesHours]= useState(Number(props.hour));
    function incrementFunction(){
        let updatedvalue = valuesHours+1;
        setvaluesHours(updatedvalue);
        // console.log(updatedvalue);
    }

    function decrementFunction(){
        let updatedvalue= valuesHours-1;
        setvaluesHours(updatedvalue);
        // console.log(updatedvalue);
    }

    return(<>
    <div className="details">
    <p>{props.Subject}</p>
    <p>{valuesHours}hours</p>
    <button onClick={incrementFunction}>+</button>
    <button onClick={decrementFunction}>-</button>
    </div>

    </>
    )
}
export default Card;