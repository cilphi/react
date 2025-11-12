import { useState } from "react"

function Counter ({item}){
    const [counter, setCounter] = useState(0);

    const handleSubstract = () =>{
        setCounter(counter - 1)
    }

    const handleAdd = () =>{
        setCounter(counter + 1)
    }

    const handleCart = () => {
        addToCart({item, count})
    }
    return (
        <div style={{
            display:"flex",
            flexDirection:"row",
            gap:16,
            alignContent:"center",
            justifyContent:"center",
        }}>
            <button style={{backgroundColor: "#AD4537",}} onClick={handleSubstract} disabled={counter === 0}>-</button>
            <p>{counter}</p>
            <button style={{backgroundColor: "#41AD37",}} onClick={handleAdd}>+</button>
            <button style={{backgroundColor: '#4537AD', color:"#fcfcfe",}} onClick={handleCart} disabled={counter === 0}>Agregar</button>
        </div>
    )
}

export default Counter