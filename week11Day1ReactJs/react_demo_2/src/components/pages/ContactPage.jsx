import React, { useEffect, useState } from 'react'
import { useNavigate, UNSAFE_NavigationContext as NavigationContext, useLocation } from 'react-router-dom'


const ContactPage = () => {
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState("any english")
    const [third, setThird] = useState("koi urdu")

    
    // handleFirstState
    const handleFirstState = () => {
        setFirst(first+1)
    }
    // handleSecondStateChange
    const handleSecondStateChange = () => {
        setSecond(second+"abc")
    }
    
    // handleThirdStateChange
    const handleThirdStateChange = () => {
        setThird(third+"alif bay pay")
    }
    
    useEffect(() => {
        console.log(`this syntax of use effect will be executed only for the 1st time when componet will be mounted`)
        
        return () => {
            const confirmationAnswer = window.confirm(`are you sure you want to leave this, your test would be submtted orit may be cancelled?`)
        }
    },[first, second])


    

    return (
        <>
            <div>ContactPage</div>
            <button onClick={handleFirstState} >change first state {first} </button>
            <div>
                <button onClick={handleSecondStateChange} >change secind state {second} </button>
            </div>
            <div>
                <button onClick={handleThirdStateChange} >change third state {third} </button>
            </div>
        </>
    )
}

export default ContactPage