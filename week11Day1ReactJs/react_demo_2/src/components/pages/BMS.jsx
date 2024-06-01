import React, { useState } from 'react'

const BMS = () => {
    // console.log("a random paragraph with 'a quote' and same with a")
    let a = 5
    // let bb = 10
    const [b, setB] = useState(20)
    
    console.log(a)
    // handleIncrement
    const handleIncrement = () => {
        a++
        console.log(a)
    }
    // handleIncrementB
    const handleIncrementB = () => {
        setB(b+1)
        console.log(b)
    }
    return (
        <>
            <div>BMS</div>
            {
                a
            }
            <button className="bg-blue-500" onClick={handleIncrement} >Incremtn the a</button>

            {
                b
            }
            <button className='bg-red-500' onClick={handleIncrementB}  >Incremtn the b</button>
        </>
    )
}

export default BMS