import { useState } from "react"

function Counter (){
    const [counter, setCounter] = useState(0);

    const handleSubstract = () =>{
        setCounter(counter - 1)
    }

    const handleAdd = () =>{
        setCounter(counter + 1)
    }

    const handleCart = () =>{
        
    }
    return (
        <div className = 'texto'>
            <button style={{backgrounColor: '#41AD37'}} onClick={handleSubstract}>-</button>
            <p>{counter}</p>
            <button style={{backgrounColor: '#AD4537'}} onClick={handleAdd}>+</button>
            <button style={{backgrounColor: '#4537AD'}} onClick={handleCart}>Agregar</button>
        </div>
    )
}

export default Counter